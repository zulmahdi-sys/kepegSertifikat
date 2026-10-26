// ==============================================================================
// GOOGLE APPS SCRIPT BACKEND CODE (UIN Ar-Raniry Banda Aceh)
// ==============================================================================

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var action = e && e.parameter && e.parameter.action;
  
  if (action === 'get_data') {
    var pegawaiSheet = ss.getSheetByName('Pegawai') || ss.insertSheet('Pegawai');
    if (pegawaiSheet.getLastRow() === 0) {
      pegawaiSheet.appendRow(['NIP', 'Nama', 'WhatsApp', 'Email', 'Jabatan', 'Unit Kerja', 'Created At', 'Role', 'Password']);
    }
    
    var sertifikatSheet = ss.getSheetByName('Sertifikat') || ss.insertSheet('Sertifikat');
    if (sertifikatSheet.getLastRow() === 0) {
      sertifikatSheet.appendRow(['ID', 'NIP', 'Nama Pegawai', 'Unit Kerja', 'Kategori', 'Judul', 'Tingkat', 'Tahun', 'Status', 'Uploaded At', 'File URL']);
    }
    
    var announcementSheet = ss.getSheetByName('Announcements') || ss.insertSheet('Announcements');
    if (announcementSheet.getLastRow() === 0) {
      announcementSheet.appendRow(['ID', 'Title', 'Content', 'Status', 'File URL', 'File Name', 'Created At']);
    }
    
    var pegawai = sheetToJSON(pegawaiSheet);
    var sertifikat = sheetToJSON(sertifikatSheet);
    var announcements = sheetToJSON(announcementSheet);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      pegawai: pegawai,
      sertifikat: sertifikat,
      announcements: announcements
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success', message: 'UIN Ar-Raniry API Active'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.type === 'register_pegawai') {
      var sheet = ss.getSheetByName('Pegawai') || ss.insertSheet('Pegawai');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['NIP', 'Nama', 'WhatsApp', 'Email', 'Jabatan', 'Unit Kerja', 'Created At', 'Role', 'Password']);
      }
      // Password di simpan di Kolom I (index 9)
      sheet.appendRow([data.nip, data.nama, data.whatsapp, data.email, data.jabatan, data.unit_kerja, new Date(), data.role || 'user', data.password]);
    } 
    else if (data.type === 'upload_sertifikat') {
      var sheet = ss.getSheetByName('Sertifikat') || ss.insertSheet('Sertifikat');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ID', 'NIP', 'Nama Pegawai', 'Unit Kerja', 'Kategori', 'Judul', 'Tingkat', 'Tahun', 'Status', 'Uploaded At', 'File URL']);
      }
      // Otomatis mencatat Tahun, Uploaded At, dan File URL dengan presisi
      sheet.appendRow([
        data.id || ('cert_' + Date.now()), 
        data.nip, 
        data.nama, 
        data.unit_kerja || '-', 
        data.kategori, 
        data.judul, 
        data.tingkat, 
        data.tahun, 
        data.status || 'Pending', 
        new Date(), 
        data.file_url || ''
      ]);
    }
    else if (data.type === 'update_cert_status') {
      var sheet = ss.getSheetByName('Sertifikat');
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = 1; i < rows.length; i++) {
          if (rows[i][0] == data.id) {
            sheet.getRange(i + 1, 9).setValue(data.status); // Status kolom ke-9
            break;
          }
        }
      }
    }
    else if (data.type === 'delete_pegawai') {
      var sheet = ss.getSheetByName('Pegawai');
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = rows.length - 1; i >= 1; i--) {
          if (rows[i][0] == data.nip) {
            sheet.deleteRow(i + 1);
          }
        }
      }
      var certSheet = ss.getSheetByName('Sertifikat');
      if (certSheet && certSheet.getLastRow() > 1) {
        var cRows = certSheet.getDataRange().getValues();
        for (var j = cRows.length - 1; j >= 1; j--) {
          if (cRows[j][1] == data.nip) {
            certSheet.deleteRow(j + 1);
          }
        }
      }
    }
    else if (data.type === 'save_announcement') {
      var sheet = ss.getSheetByName('Announcements') || ss.insertSheet('Announcements');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ID', 'Title', 'Content', 'Status', 'File URL', 'File Name', 'Created At']);
      }
      var rows = sheet.getDataRange().getValues();
      var found = false;
      for (var i = 1; i < rows.length; i++) {
        if (rows[i][0] == data.id) {
          sheet.getRange(i + 1, 2).setValue(data.title);
          sheet.getRange(i + 1, 3).setValue(data.content);
          sheet.getRange(i + 1, 4).setValue(data.status);
          sheet.getRange(i + 1, 5).setValue(data.file_url || '');
          sheet.getRange(i + 1, 6).setValue(data.file_name || '');
          found = true;
          break;
        }
      }
      if (!found) {
        sheet.appendRow([data.id, data.title, data.content, data.status, data.file_url || '', data.file_name || '', new Date()]);
      }
    }
    else if (data.type === 'delete_announcement') {
      var sheet = ss.getSheetByName('Announcements');
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = rows.length - 1; i >= 1; i--) {
          if (rows[i][0] == data.id) {
            sheet.deleteRow(i + 1);
          }
        }
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sheetToJSON(sheet) {
  if (!sheet) return [];
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];
  var headers = rows[0];
  var data = [];
  for (var i = 1; i < rows.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = rows[i][j];
    }
    if (obj['Password'] !== undefined) {
      obj['password'] = obj['Password'];
    }
    data.push(obj);
  }
  return data;
}