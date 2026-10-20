function getDomainName() {
console.log(window.location.host);
console.log(document.location.href);
console.log(document.URL);
console.log(document.referrer);
var countryName = '';
url = document.referrer;
console.log(url);
if (url === undefined || url.length>0) {
ref = url.match(/:\/\/(.[^/]+)/)[1];
ref = ref.replace('www.', '');
console.log(ref);
if (ref == 'statlight.uk' || ref == 'statlight.co.uk') {
console.log('united kingdom');
countryName = 'india';
}
else if (ref == 'statlight.in') {
console.log('india');
countryName = 'india'; //change later to statlight_india
}
else if (ref == 'statlight.com.au') {
console.log('australia');
countryName = 'india';
}
try {
if (typeof (Storage) !== "undefined") {
window.sessionStorage.setItem('countryname', countryName);
}
}
catch (exception) {
console.log("Current browser setting doesn't support browser storage. Please try with different browser.");
}
}
console.log('getcountry');
if ('' == countryName) {
//getUserLocation();
countryName = 'india';
window.sessionStorage.setItem('countryname', countryName);
countrydata(countryName);
}
else {
countrydata('united kingdom');
}
}
function getUserLocation() {
console.log('userlocation');
return jQuery.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDxMnVFvpyW-nqSmnbF4kRRmi9hK0GZWbQ", function (success) {
var myLatlng = new google.maps.LatLng(success.location.lat, success.location.lng);
getCountry(myLatlng, function (result) {
console.log('Country Name : ' + result);
try {
if (typeof (Storage) !== "undefined") {
window.sessionStorage.setItem('countryname', result);
}
}
catch (exception) {
console.log("Current browser setting doesn't support browser storage. Please try with different browser.");
}
countrydata(result);
});
})
.fail(function (err) {
console.log("API Geolocation error! \n\n" + err);
});
}
function getCountry(latLng, callback) {
var retValue = '';
var currgeocoder = new google.maps.Geocoder();
currgeocoder.geocode({ 'latLng': latLng },
function (results, status) {
if (status == google.maps.GeocoderStatus.OK) {
if (results[0]) {
for (var i = 0; i < results[0].address_components.length; i++) {
if (results[0].address_components[i].types[0] == "country") {
console.log(results[0].address_components[i].long_name);
retValue = results[0].address_components[i].long_name;
}
}
}
else {
console.log("No results");
retValue = "No results";
}
}
else {
console.log("Status: " + status);
retValue = "Error";
}
callback(retValue);
});
}
function pagecontent() {
var hdnCountryName;
try {
if (typeof (Storage) !== "undefined") {
if (sessionStorage.length > 0) {
if (sessionStorage.getItem('countryname') != null && sessionStorage.getItem('countryname') != "") {
hdnCountryName = window.sessionStorage.getItem("countryname");
}
else {
console.log('Key not defined');
getUserLocation();
}
} else { console.log('No Storage Length'); getUserLocation(); console.log('end'); return; }
} else { hdnCountryName = ' '; }
}
catch (e) {
hdnCountryName = ' ';
}
countrydata(hdnCountryName);
}
function countrydata(hdnCountryName) {
if (hdnCountryName.toLowerCase() == 'india') {
$('.cntLocation').val('in');
$('#anchTopPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanTopPhoneNumber').text(' +91 99942 51727');
$('#anchTopEmail').attr('href', 'mailto:info@statlightglobal.com?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlightglobal.com');
$('#anchFtrPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanFtrPhoneNumber').text('+91 99942 51727');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrPrivacy').hide();
$('#ftrTerms').hide();
$('#ftrDisclaimer').hide();
$('#anchCopyRight').attr('href', 'http://statlightglobal.com');
$('#spanCopyRight').text('Statlight Software Solutions Pvt. Ltd.');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanPopUpPhoneNumber').text('+91 99942 51727');
}
else if (hdnCountryName.toLowerCase() == 'united states') {
$('.cntLocation').val('us');
$('#anchTopPhoneNumber').attr('href', 'callto://+18473481133');
$('#spanTopPhoneNumber').text(' +1 847 348 1133');
$('#anchTopEmail').attr('href', 'mailto:info@statlightglobal.com?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlightglobal.com');
$('#anchFtrPhoneNumber').attr('href', 'callto://+18473481133');
$('#spanFtrPhoneNumber').text('+1 847 348 1133');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrTerms').hide();
$('#ftrPrivacy').hide();
$('#ftrDisclaimer').hide();
$('#anchFtrUSPhoneNumber').hide();
$('#anchPopUpUSPhoneNumber').hide();
$('#anchCopyRight').attr('href', 'http://statlightglobal.com');
$('#spanCopyRight').text('Statlight Software Solutions Pvt. Ltd.');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+18473481133');
$('#spanPopUpPhoneNumber').text('+1 847 348 1133');
}
else if (hdnCountryName.toLowerCase() == 'united kingdom' || hdnCountryName.toLowerCase() == 'ireland') {
$('.cntLocation').val('uk');
$('#anchTopPhoneNumber').attr('href', 'callto://+447850588704');
$('#spanTopPhoneNumber').text(' +44 785 058 8704');
$('#anchTopEmail').attr('href', 'mailto:info@statlightglobal.com?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlightglobal.com');
$('#anchFtrPhoneNumber').attr('href', 'callto://+447850588704');
$('#spanFtrPhoneNumber').text('+44 785 058 8704');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrTerms').show();
$('#ftrPrivacy').show();
$('#ftrDisclaimer').show();
$('#anchCopyRight').attr('href', 'http://statlightglobal.com');
$('#spanCopyRight').text('Statlight Global Ltd.');
$('#anchPopUpAddress').text('71-75, Shelton Street, Covent Garden, London, WC2H 9JQ');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+447850588704');
$('#spanPopUpPhoneNumber').text('+44 785 058 8704');
$('#jobSoftEngineer').hide();
$('#jobJavaDeveloper').hide();
$('#jobWepAppDesigner').hide();
$('#visit-site').hide();
$('#visit-bzdesk-site').hide();
$('#visit-frontaide-site').hide();
$('#visit-frontaide-site2').hide();
$('#frontaide-visit-site').hide();
$('#frontaide-trail-signup').hide();
$('#bzdesk-visit-site').hide();
$('#bzdesk-request-demo').hide();
$('#leadtradex-visit-site').hide();
$('#leadtradex-request-demo').hide();
}
else if (hdnCountryName.toLowerCase() == 'australia') {
$('.cntLocation').val('au');
$('#anchTopPhoneNumber').attr('href', 'callto://+61470556578');
$('#spanTopPhoneNumber').text(' +61 470 556 578');
$('#anchTopEmail').attr('href', 'mailto:info@statlightglobal.com?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlightglobal.com');
$('#anchFtrPhoneNumber').attr('href', 'callto://+61470556578');
$('#spanFtrPhoneNumber').text('+61 470 556 578');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrTerms').hide();
$('#ftrPrivacy').hide();
$('#ftrDisclaimer').hide();
$('#anchCopyRight').attr('href', 'http://statlightglobal.com');
$('#spanCopyRight').text('Statlight Software Solutions Pty. Ltd.');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+61470556578');
$('#spanPopUpPhoneNumber').text('+61 470 556 578');
}
else if (hdnCountryName.toLowerCase() == 'statlight_india') {
$('.cntLocation').val('in');
$('#anchTopPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanTopPhoneNumber').text(' +91 99942 51727');
$('#anchTopEmail').attr('href', 'mailto:info@statlight.in?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlight.in');
$('#anchFtrPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanFtrPhoneNumber').text('+91 99942 51727');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrPrivacy').hide();
$('#ftrTerms').hide();
$('#ftrDisclaimer').hide();
$('#anchCopyRight').attr('href', 'http://statlight.in');
$('#spanCopyRight').text('Statlight Software Solutions Pvt. Ltd.');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanPopUpPhoneNumber').text('+91 99942 51727');
}
else {
$('.cntLocation').val('in');
$('#anchTopPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanTopPhoneNumber').text(' +91 99942 51727');
$('#anchTopEmail').attr('href', 'mailto:info@statlightglobal.com?subject=Hai_Statlight!');
$('#spanTopEmail').text(' info@statlightglobal.com');
$('#anchFtrPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanFtrPhoneNumber').text('+91 99942 51727');
$('#menuPrivacy').hide();
$('#menuTerms').hide();
$('#menuDisclaimer').hide();
$('#ftrTerms').hide();
$('#ftrPrivacy').hide();
$('#ftrDisclaimer').hide();
$('#anchCopyRight').attr('href', 'http://statlightglobal.com');
$('#spanCopyRight').text('Statlight Software Solutions Pvt. Ltd.');
$('#anchPopUpPhoneNumber').attr('href', 'callto://+919994251727');
$('#spanPopUpPhoneNumber').text('+91 99942 51727');
}
$('#spanTopPhoneNumber').show();//
$('#spanTopEmail').show();
$('#spanPopUpPhoneNumber').show();
$('#spanFtrPhoneNumber').show();
$('#spanCopyRight').show();
}