// ==============================================================================
// GOOGLE APPS SCRIPT BACKEND CODE (Paste into Extensions > Apps Script)
// Project: UIN Ar-Raniry Banda Aceh - Sistem Pengumpulan Sertifikat
// ==============================================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.type === 'register_pegawai') {
      var sheet = ss.getSheetByName('Pegawai') || ss.insertSheet('Pegawai');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['NIP', 'Nama', 'WhatsApp', 'Email', 'Jabatan', 'Unit Kerja', 'Created At']);
      }
      sheet.appendRow([
        data.nip, 
        data.nama, 
        data.whatsapp, 
        data.email, 
        data.jabatan, 
        data.unit_kerja, 
        new Date()
      ]);
    } 
    else if (data.type === 'upload_sertifikat') {
      var sheet = ss.getSheetByName('Sertifikat') || ss.insertSheet('Sertifikat');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ID', 'NIP', 'Nama', 'Kategori', 'Judul', 'Tingkat', 'Tahun', 'Status', 'Created At']);
      }
      sheet.appendRow([
        data.id, 
        data.nip, 
        data.nama, 
        data.kategori, 
        data.judul, 
        data.tingkat, 
        data.tahun, 
        data.status, 
        new Date()
      ]);
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
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("UIN Ar-Raniry Certificate Collection API is Active & Ready.");
}