function CERTIFICATE_QR(name, certificateid, start, end, department ) {  
  const studentname = encodeURIComponent(name);
  const purpose = encodeURIComponent("Inernship");
  const departmentType = encodeURIComponent(department)
  const startDate = encodeURIComponent(start);
  const endDate = encodeURIComponent(end);
  const certificateId = encodeURIComponent(certificateid);
 return `https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chl=https://certificate.sahajananddigital.in/?name=${studentname}&purpose=${purpose}&department=${departmentType}&start=${startDate}&end=${endDate}&certificate_id=${certificateId}`;
}