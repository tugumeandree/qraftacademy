
// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loader =document.querySelector('div.progress');
  loader.style.display = "block"
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    window.location = 'homepage.html'; 
    // return db.collection('users').doc(cred.user.uid).set({
    //   bio: signupForm['signup-bio'].value
    // });
  }).then(() => {
    // close the signup modal & reset form
    signupForm.reset();
    window.location = 'homepage.html'; 
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = err.message;
    window.location = 'homepage.html'; 
  });
});

//Add realtime authentication istener
auth.onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
      console.log(firebaseUser);
  } else{
      console.log('not logged in');
  }
});

// // logout
// const logout = document.querySelector('#logout');
// // logout.addEventListener('click', (e) => {
// //   e.preventDefault();
// //   auth.signOut();
// // });

