/**
 * Google Apps Script Backend for UIN Ar-Raniry Certificate Collection System
 * Spreadsheet ID: 1JUs07WljgRkFgKj5Bq3lPq54QF4-c1R8BUo8Rp7ySpQ
 * Drive Folder ID: 1DVlR9lMRdIDDuEbqUVyVlAxypxNoUOLo
 */

const SPREADSHEET_ID = '1JUs07WljgRkFgKj5Bq3lPq54QF4-c1R8BUo8Rp7ySpQ';
const DRIVE_FOLDER_ID = '1DVlR9lMRdIDDuEbqUVyVlAxypxNoUOLo';

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'UIN Ar-Raniry Backend API is active & running.'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    if (action === 'register_pegawai') {
      let sheet = ss.getSheetByName('Pegawai');
      if (!sheet) {
        sheet = ss.insertSheet('Pegawai');
        sheet.appendRow(['NIP', 'Nama', 'Email', 'Phone', 'Status ASN', 'Jabatan', 'Unit Kerja', 'Registered At']);
      }
      sheet.appendRow([data.nip, data.nama, data.email, data.phone, data.statusAsn, data.jabatan, data.unitKerja, new Date()]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Pegawai registered successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
        
    } else if (action === 'upload_certificate') {
      let sheet = ss.getSheetByName('Sertifikat');
      if (!sheet) {
        sheet = ss.insertSheet('Sertifikat');
        sheet.appendRow(['ID', 'NIP', 'Nama Pegawai', 'Unit Kerja', 'Kategori', 'Tingkat', 'Nama Sertifikat', 'Instansi', 'JP', 'Tahun', 'File URL', 'Uploaded At']);
      }
      
      let fileUrl = '';
      if (data.fileBase64) {
        const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
        const splitData = data.fileBase64.split(',');
        const contentType = splitData[0].match(/:(.*?);/)[1];
        const decodedBytes = Utilities.base64Decode(splitData[1]);
        const blob = Utilities.newBlob(decodedBytes, contentType, data.fileName || 'sertifikat.pdf');
        
        const file = folder.createFile(blob);
        fileUrl = file.getUrl();
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      }
      
      sheet.appendRow([data.id, data.nip, data.namaPegawai, data.unitKerja, data.kategori, data.tingkat, data.namaSertifikat, data.instansiPenerbit, data.jumlahJp, data.tahun, fileUrl, new Date()]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', fileUrl: fileUrl, message: 'Certificate uploaded to Drive & Sheet' }))
        .setMimeType(ContentService.MimeType.JSON);
        
    } else if (action === 'delete_pegawai') {
      let sheetPegawai = ss.getSheetByName('Pegawai');
      if (sheetPegawai) {
        const rows = sheetPegawai.getDataRange().getValues();
        for (let i = rows.length; i >= 2; i--) {
          if (String(rows[i-1][0]) === String(data.nip)) {
            sheetPegawai.deleteRow(i);
          }
        }
      }
      
      let sheetCerts = ss.getSheetByName('Sertifikat');
      if (sheetCerts) {
        const rows = sheetCerts.getDataRange().getValues();
        for (let i = rows.length; i >= 2; i--) {
          if (String(rows[i-1][1]) === String(data.nip)) {
            sheetCerts.deleteRow(i);
          }
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Pegawai and certificates deleted from sheet' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid action' }))
        .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}