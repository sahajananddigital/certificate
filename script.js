var text = document.getElementById('validation-text');
var certificateContainer = document.getElementById('certificate-container');
var invalidCertificateContainer = document.getElementById('invalid-certificate-container');



var url_string = window.location.href; 
var url = new URL(url_string);
var type = url.searchParams.get("type");
var value = url.searchParams.get("value");

const studentname = decodeURIComponent(url.searchParams.get('name')) != "null" ? decodeURIComponent(url.searchParams.get('name')) : ''
const purpose = decodeURIComponent(url.searchParams.get("purpose")) != "null" ? decodeURIComponent(url.searchParams.get("purpose")) : ''
const departmentType = decodeURIComponent(url.searchParams.get("department")) != "null" ? decodeURIComponent(url.searchParams.get("department")) : ''
const startDate = decodeURIComponent(url.searchParams.get("start")) != "null" ? decodeURIComponent(url.searchParams.get("start")) : ''
const endDate = decodeURIComponent(url.searchParams.get("end")) != "null" ? decodeURIComponent(url.searchParams.get("end")) : ''
const certificateId = decodeURIComponent(url.searchParams.get("certificate_id")) != "null" ? decodeURIComponent(url.searchParams.get("certificate_id")) : ''

const validationText = `This certificate is provided to <strong>${studentname}</strong> 👏 for ${purpose} 🏆 in ${departmentType} for date between ${startDate} and ${endDate} and 🙂 Unique Certificate ID is <strong>${certificateId}</strong> `;

text.innerHTML = validationText;

if( (studentname != '') && (purpose != '') && (departmentType != '') && (startDate != '') && (endDate != '') && (certificateId != '') ) {
    certificateContainer.classList.remove('d-none');
} else {  
    invalidCertificateContainer.classList.remove('d-none');
}