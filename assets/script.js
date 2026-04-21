console.log("script werkt ")

const saveForms = document.querySelectorAll(".save-form")

saveForms.forEach((form) => {
  const button = form.querySelector(".save-button")

  form.addEventListener("submit", async (event) => {
    event.preventDefault()

    // reset states
    button.classList.remove("success", "error")
    button.classList.add("loading")

    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(formData),
        redirect: "follow"
      })

      button.classList.remove("loading")

      const popup = document.createElement("div")

      // ERROR (duplicate)
      if (response.url.includes("status=error")) {
        button.classList.add("error")

        popup.className = "popup error"
        popup.textContent = "This gift is already saved"
      } 
      else {
        // ✔ SUCCESS
        button.classList.add("success")

        popup.className = "popup success"
        popup.textContent = "Gift is saved"

        // FIX: update wishlist count
        const badge = document.querySelector(".badge")

        if (badge) {
          let count = parseInt(badge.textContent)
          badge.textContent = count + 1
        }
      }

      document.body.appendChild(popup)

      setTimeout(() => popup.remove(), 3000)

    } catch (error) {
      // NETWORK ERROR
      button.classList.remove("loading")
      button.classList.add("error")

      const popup = document.createElement("div")
      popup.className = "popup error"
      popup.textContent = "Network error"

      document.body.appendChild(popup)

      setTimeout(() => popup.remove(), 3000)
    }
  })
})