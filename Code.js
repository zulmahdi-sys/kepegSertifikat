// ==============================================================================
// GOOGLE APPS SCRIPT BACKEND CODE (UIN Ar-Raniry Banda Aceh) - AUTO SETUP
// ==============================================================================

var SPREADSHEET_ID = '1JUs07WljgRkFgKj5Bq3lPq54QF4-c1R8BUo8Rp7ySpQ';
var CERTIFICATE_FOLDER_IDS = {
  'Sertifikat Keahlian': '1BOpc7urDl_mkUrILfKgfHaj_6wzkRx5L',
  'Sertifikat Kompetensi': '1DBalN8Rjjh8ChfmxQWzyGhz8ByDBUTGb'
};

function doGet(e) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var action = e && e.parameter && e.parameter.action;
  
  // 1. Pegawai Sheet
  var pegawaiSheet = ss.getSheetByName('Pegawai') || ss.insertSheet('Pegawai');
  if (pegawaiSheet.getLastRow() === 0) {
    pegawaiSheet.appendRow(['NIP', 'Nama', 'WhatsApp', 'Email', 'Jabatan', 'Unit Kerja', 'Created At', 'Role', 'Password']);
  }
  
  // 2. Sertifikat Sheet
  var sertifikatSheet = ss.getSheetByName('Sertifikat') || ss.insertSheet('Sertifikat');
  if (sertifikatSheet.getLastRow() === 0) {
    sertifikatSheet.appendRow(['ID', 'NIP', 'Nama Pegawai', 'Unit Kerja', 'Kategori', 'Judul', 'Instansi/Lembaga Penerbit', 'Peran pada Sertifikat', 'Tingkat', 'Tahun', 'Status', 'Uploaded At', 'File URL', 'Drive File ID']);
  }
  ensureHeaderColumn(sertifikatSheet, 'Drive File ID');
  ensureHeaderColumn(sertifikatSheet, 'Instansi/Lembaga Penerbit');
  ensureHeaderColumn(sertifikatSheet, 'Peran pada Sertifikat');
  
  // 3. Announcements Sheet
  var announcementSheet = ss.getSheetByName('Announcements') || ss.insertSheet('Announcements');
  if (announcementSheet.getLastRow() === 0) {
    announcementSheet.appendRow(['ID', 'Title', 'Content', 'Status', 'File URL', 'File Name', 'Created At']);
  }

  // 4. Running Text Sheet
  var runningTextSheet = ss.getSheetByName('RunningText');
  if (!runningTextSheet) {
    runningTextSheet = ss.insertSheet('RunningText');
    runningTextSheet.appendRow(['ID', 'Message', 'Status', 'Updated At']);
    runningTextSheet.appendRow([
      'running_text_initial',
      'Selamat Datang di Portal Resmi Pengumpulan Sertifikat Dosen & Tendik UIN Ar-Raniry Banda Aceh Tahun 2026. Batas Akhir Unggah Berkas adalah 30 Oktober 2026 pukul 23:59 WIB. Pastikan seluruh dokumen berkas keahlian dan kompetensi telah divalidasi dengan benar.',
      'published',
      new Date()
    ]);
  } else if (runningTextSheet.getLastRow() === 0) {
    runningTextSheet.appendRow(['ID', 'Message', 'Status', 'Updated At']);
  }

  // 5. Schedule Sheet
  var scheduleSheet = ss.getSheetByName('Schedule');
  if (!scheduleSheet) {
    scheduleSheet = ss.insertSheet('Schedule');
    scheduleSheet.appendRow(['ID', 'Start At', 'End At', 'Updated At']);
    scheduleSheet.appendRow(['schedule', '', 1793379540000, new Date()]);
  } else if (scheduleSheet.getLastRow() === 0) {
    scheduleSheet.appendRow(['ID', 'Start At', 'End At', 'Updated At']);
    scheduleSheet.appendRow(['schedule', '', 1793379540000, new Date()]);
  } else if (scheduleSheet.getLastRow() === 1) {
    scheduleSheet.appendRow(['schedule', '', 1793379540000, new Date()]);
  }

  // 6. UnitKerja Sheet
  var unitSheet = ss.getSheetByName('UnitKerja') || ss.insertSheet('UnitKerja');
  if (unitSheet.getLastRow() === 0) {
    unitSheet.appendRow(['ID', 'Nama Unit']);
    var defaultUnits = [
      'Biro AUPK', 'Biro AAKK', 'Fakultas Syariah dan Hukum', 
      'Fakultas Tarbiyah dan Keguruan', 'Fakultas Ushuluddin dan Filsafat', 
      'Fakultas Dakwah dan Komunikasi', 'Fakultas Adab dan Humaniora', 
      'Fakultas Ekonomi dan Bisnis Islam', 'Fakultas Sains dan Teknologi', 
      'Fakultas Ilmu Sosial dan Ilmu Pemerintahan', 'Fakultas Psikologi', 
      'Fakultas Kedokteran', 'Pascasarjana', 'Perpustakaan UIN'
    ];
    for (var u = 0; u < defaultUnits.length; u++) {
      unitSheet.appendRow(['unit_' + (u + 1), defaultUnits[u]]);
    }
  }
  
  if (action === 'get_data') {
    var pegawai = sheetToJSON(pegawaiSheet);
    var sertifikat = sheetToJSON(sertifikatSheet);
    var announcements = sheetToJSON(announcementSheet);
    var running_text = sheetToJSON(runningTextSheet);
    var scheduleRows = sheetToJSON(scheduleSheet);
    var schedule = scheduleRows.length ? {
      start_at: scheduleRows[0]['Start At'] || null,
      end_at: scheduleRows[0]['End At'],
      updated_at: scheduleRows[0]['Updated At']
    } : null;
    var unit_kerja = sheetToJSON(unitSheet).map(function(unit) {
      return {
        id: unit.ID,
        nama_unit: unit['Nama Unit']
      };
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      pegawai: pegawai,
      sertifikat: sertifikat,
      announcements: announcements,
      running_text: running_text,
      schedule: schedule,
      unit_kerja: unit_kerja
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success', message: 'UIN Ar-Raniry API Active'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var uploadedFile = null;
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    if (data.type === 'register_pegawai') {
      var sheet = ss.getSheetByName('Pegawai') || ss.insertSheet('Pegawai');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['NIP', 'Nama', 'WhatsApp', 'Email', 'Jabatan', 'Unit Kerja', 'Created At', 'Role', 'Password']);
      }
      // Password disimpan di Kolom I (index 9)
      sheet.appendRow([data.nip, data.nama, data.whatsapp, data.email, data.jabatan, data.unit_kerja, new Date(), data.role || 'user', data.password]);
    } 
    else if (data.type === 'upload_sertifikat') {
      var sheet = ss.getSheetByName('Sertifikat') || ss.insertSheet('Sertifikat');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ID', 'NIP', 'Nama Pegawai', 'Unit Kerja', 'Kategori', 'Judul', 'Instansi/Lembaga Penerbit', 'Peran pada Sertifikat', 'Tingkat', 'Tahun', 'Status', 'Uploaded At', 'File URL', 'Drive File ID']);
      }
      ensureHeaderColumn(sheet, 'Drive File ID');
      ensureHeaderColumn(sheet, 'Instansi/Lembaga Penerbit');
      ensureHeaderColumn(sheet, 'Peran pada Sertifikat');
      uploadedFile = saveCertificateFile(data);
      var certificateHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      var certificateRecord = {
        'ID': data.id || ('cert_' + Date.now()),
        'NIP': data.nip,
        'Nama Pegawai': data.nama,
        'Unit Kerja': data.unit_kerja || '-',
        'Kategori': data.kategori,
        'Judul': data.judul,
        'Instansi/Lembaga Penerbit': data.instansi || '',
        'Peran pada Sertifikat': data.peran || '',
        'Tingkat': data.tingkat,
        'Tahun': data.tahun,
        'Status': data.status || 'Pending',
        'Uploaded At': new Date(),
        'File URL': uploadedFile.getUrl(),
        'Drive File ID': uploadedFile.getId()
      };
      var certificateRow = certificateHeaders.map(function(header) {
        return certificateRecord[header] === undefined ? '' : certificateRecord[header];
      });
      sheet.appendRow(certificateRow);
    }
    else if (data.type === 'update_cert_status') {
      var sheet = ss.getSheetByName('Sertifikat');
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        var statusColumn = rows[0].indexOf('Status');
        if (statusColumn < 0) {
          throw new Error('Kolom Status tidak ditemukan pada sheet Sertifikat.');
        }
        for (var i = 1; i < rows.length; i++) {
          if (rows[i][0] == data.id) {
            sheet.getRange(i + 1, statusColumn + 1).setValue(data.status);
            break;
          }
        }
      }
    }
    else if (data.type === 'delete_sertifikat') {
      var certSheet = ss.getSheetByName('Sertifikat');
      if (certSheet && certSheet.getLastRow() > 1) {
        var certRows = certSheet.getDataRange().getValues();
        var driveFileIdColumn = certRows[0].indexOf('Drive File ID');
        for (var certIndex = certRows.length - 1; certIndex >= 1; certIndex--) {
          var matchesNip = !data.nip || String(certRows[certIndex][1]) === String(data.nip);
          var matchesId = data.id && String(certRows[certIndex][0]) === String(data.id);
          var matchesTitle = !data.id && data.judul && String(certRows[certIndex][5]) === String(data.judul);
          if (matchesNip && (matchesId || matchesTitle)) {
            if (driveFileIdColumn >= 0 && certRows[certIndex][driveFileIdColumn]) {
              trashDriveFile(certRows[certIndex][driveFileIdColumn]);
            }
            certSheet.deleteRow(certIndex + 1);
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
        var driveFileIdColumn = cRows[0].indexOf('Drive File ID');
        for (var j = cRows.length - 1; j >= 1; j--) {
          if (cRows[j][1] == data.nip) {
            if (driveFileIdColumn >= 0 && cRows[j][driveFileIdColumn]) {
              trashDriveFile(cRows[j][driveFileIdColumn]);
            }
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
          var matchesAnnouncementId = data.id && String(rows[i][0]) === String(data.id);
          var matchesAnnouncementTitle = !data.id && data.title && String(rows[i][1]) === String(data.title);
          if (matchesAnnouncementId || matchesAnnouncementTitle) {
            sheet.deleteRow(i + 1);
          }
        }
      }
    }
    else if (data.type === 'save_running_text') {
      var runningTextSheet = ss.getSheetByName('RunningText') || ss.insertSheet('RunningText');
      if (runningTextSheet.getLastRow() === 0) {
        runningTextSheet.appendRow(['ID', 'Message', 'Status', 'Updated At']);
      }
      var runningTextRows = runningTextSheet.getDataRange().getValues();
      var runningTextHeaders = runningTextRows[0];
      var runningTextIdColumn = runningTextHeaders.indexOf('ID');
      var runningTextRowIndex = -1;
      if (runningTextIdColumn < 0) throw new Error('Kolom ID tidak ditemukan pada sheet RunningText.');
      for (var runningTextIndex = 1; runningTextIndex < runningTextRows.length; runningTextIndex++) {
        if (String(runningTextRows[runningTextIndex][runningTextIdColumn]) === String(data.id)) {
          runningTextRowIndex = runningTextIndex + 1;
          break;
        }
      }
      var runningTextRecord = {
        'ID': data.id,
        'Message': data.message,
        'Status': data.status,
        'Updated At': new Date()
      };
      if (runningTextRowIndex > 0) {
        runningTextHeaders.forEach(function(header, columnIndex) {
          if (runningTextRecord[header] !== undefined) {
            runningTextSheet.getRange(runningTextRowIndex, columnIndex + 1).setValue(runningTextRecord[header]);
          }
        });
      } else {
        runningTextSheet.appendRow(runningTextHeaders.map(function(header) {
          return runningTextRecord[header] === undefined ? '' : runningTextRecord[header];
        }));
      }
    }
    else if (data.type === 'delete_running_text') {
      var runningTextSheet = ss.getSheetByName('RunningText');
      if (runningTextSheet && runningTextSheet.getLastRow() > 1) {
        var runningTextRows = runningTextSheet.getDataRange().getValues();
        var runningTextIdColumn = runningTextRows[0].indexOf('ID');
        for (var runningTextIndex = runningTextRows.length - 1; runningTextIndex >= 1; runningTextIndex--) {
          if (runningTextIdColumn >= 0 && String(runningTextRows[runningTextIndex][runningTextIdColumn]) === String(data.id)) {
            runningTextSheet.deleteRow(runningTextIndex + 1);
          }
        }
      }
    }
    else if (data.type === 'save_schedule') {
      var scheduleStartAt = data.start_at === null || data.start_at === '' ? '' : Number(data.start_at);
      var scheduleEndAt = Number(data.end_at);
      if (!isFinite(scheduleEndAt) || scheduleEndAt <= 0 ||
          (scheduleStartAt !== '' && (!isFinite(scheduleStartAt) || scheduleStartAt >= scheduleEndAt))) {
        throw new Error('Rentang tanggal jadwal tidak valid.');
      }
      var scheduleSheet = ss.getSheetByName('Schedule') || ss.insertSheet('Schedule');
      if (scheduleSheet.getLastRow() === 0) {
        scheduleSheet.appendRow(['ID', 'Start At', 'End At', 'Updated At']);
      }
      if (scheduleSheet.getLastRow() < 2) {
        scheduleSheet.appendRow(['schedule', scheduleStartAt, scheduleEndAt, new Date()]);
      } else {
        scheduleSheet.getRange(2, 1, 1, 4).setValues([['schedule', scheduleStartAt, scheduleEndAt, new Date()]]);
      }
    }
    else if (data.type === 'save_unit_kerja') {
      var sheet = ss.getSheetByName('UnitKerja') || ss.insertSheet('UnitKerja');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['ID', 'Nama Unit']);
      }
      sheet.appendRow([data.id || ('unit_' + Date.now()), data.nama_unit]);
    }
    else if (data.type === 'delete_unit_kerja') {
      var sheet = ss.getSheetByName('UnitKerja');
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = rows.length - 1; i >= 1; i--) {
          var matchesUnitId = data.id && String(rows[i][0]) === String(data.id);
          var matchesUnitName = data.nama_unit && String(rows[i][1]) === String(data.nama_unit);
          if (matchesUnitId || matchesUnitName) {
            sheet.deleteRow(i + 1);
          }
        }
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    if (uploadedFile) {
      try {
        uploadedFile.setTrashed(true);
      } catch(cleanupError) {
        console.error('Failed to clean up an incomplete certificate upload: ' + cleanupError);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveCertificateFile(data) {
  var match = /^data:(application\/pdf|image\/jpeg);base64,([A-Za-z0-9+/=]+)$/.exec(String(data.file_data || ''));
  if (!match) {
    throw new Error('File upload must contain a valid PDF or JPG data URL.');
  }
  var folderId = CERTIFICATE_FOLDER_IDS[String(data.kategori || '')];
  if (!folderId) {
    throw new Error('Kategori sertifikat tidak valid untuk menentukan folder penyimpanan.');
  }

  var bytes = Utilities.base64Decode(match[2]);
  if (bytes.length === 0 || bytes.length > 2 * 1024 * 1024) {
    throw new Error('Certificate file must be no larger than 2 MB.');
  }
  var mimeType = match[1];
  var isPdf = mimeType === 'application/pdf' &&
    bytes.length >= 5 &&
    bytes[0] === 37 && bytes[1] === 80 && bytes[2] === 68 && bytes[3] === 70 && bytes[4] === 45;
  var isJpeg = mimeType === 'image/jpeg' &&
    bytes.length >= 3 &&
    (bytes[0] & 255) === 255 && (bytes[1] & 255) === 216 && (bytes[2] & 255) === 255;
  if (!isPdf && !isJpeg) {
    throw new Error('The selected file content does not match a PDF or JPG file.');
  }

  var fileName = String(data.file_name || 'sertifikat').replace(/[\\\/:*?"<>|]/g, '_').substring(0, 150);
  var blob = Utilities.newBlob(bytes, mimeType, fileName);
  return DriveApp.getFolderById(folderId).createFile(blob);
}

function trashDriveFile(fileId) {
  DriveApp.getFileById(String(fileId)).setTrashed(true);
}

function ensureHeaderColumn(sheet, headerName) {
  var lastColumn = sheet.getLastColumn();
  if (lastColumn === 0) {
    sheet.appendRow([headerName]);
    return;
  }
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  if (headers.indexOf(headerName) === -1) {
    sheet.getRange(1, lastColumn + 1).setValue(headerName);
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
    if (obj['Nama Unit'] !== undefined) {
      obj['nama_unit'] = obj['Nama Unit'];
    }
    data.push(obj);
  }
  return data;
}