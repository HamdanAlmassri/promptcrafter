// SIGNUP FUNCTION
async function signUp(email, password, name) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await db.collection("users").doc(user.uid).set({
      name: name,
      email: user.email,
      createdAt: new Date()
    });
    alert("Signup successful! Welcome, " + name);
  } catch (error) {
    console.error("Signup error:", error);
    alert(error.message);
  }
}

// LOGIN FUNCTION
async function logIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const userDoc = await db.collection("users").doc(user.uid).get();
    if (userDoc.exists) {
      const profile = userDoc.data();
      alert("Login successful! Welcome back, " + profile.name);
    }
  } catch (error) {
    console.error("Login error:", error);
    alert(error.message);
  }
}

// LOGOUT FUNCTION
async function logOut() {
  try {
    await auth.signOut();
    alert("You have been logged out.");
  } catch (error) {
    console.error("Logout error:", error);
  }
}

// AUTH STATE OBSERVER
auth.onAuthStateChanged((user) => {
  if (user) console.log("User logged in:", user.uid);
  else console.log("No user logged in");
});
