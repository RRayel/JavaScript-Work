var registerForm; 
window.onload = function() { 
registerForm = new RegisterForm(); 
registerForm.resetForm(); 
// create and attach the event handlers 
$("register").onclick = function() { 
if ( registerForm.validateForm() ) {  
// comment out submit method if you to show the results 
//  $("registration_form").submit(); 
navigate.showResults(); } 
}; 
$("reset").onclick = function() { 
registerForm.resetForm(); 
}; 
$("back") = function() { 
navigate.showForm(); 
registerForm.resetForm(); 
}; 
}; 