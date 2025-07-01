

function logout() {
            localStorage.removeItem("token");
            location.reload();  // ricarica la pagina senza il token
        }