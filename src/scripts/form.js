function initForm() {
    const form = document.querySelector("#contact_form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)
        console.log(data)
        sendData(data)
    })

    async function sendData(data) {
        try {
            const res = await fetch("http://localhost:5000/request/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })


            if (!res.ok) throw new Error("Something went wrong! Please try again later")

            const result = await res.json()

            if (!result.success) {
                throw new Error("Something went wrong! Please try again later")
            }

            window.location.href = "/thx.html?type=form"

        } catch (error) {
            console.log(error.message)
        }
    }
}

export default initForm