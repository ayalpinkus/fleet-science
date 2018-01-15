

/* validateLogin is called in login.html and simply sees if the user is allowed to log in.
 * In this "static" version, only "conor" can log in.
 */
function validateLogin(username) {
    if (username != "conor") {
        alert("User "+username+" does not exist. In this version, you can only log in as user 'conor'");
        return false;
    }
    return true;
} 








/*
 * resetDatabase. In this static data version, this function does nothing.
 */
function resetDatabase()
{
}
