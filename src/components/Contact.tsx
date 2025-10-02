const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!formData.name || !formData.email || !formData.message) {
    toast.error('Please fill in all fields')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    toast.error('Please enter a valid email address')
    return
  }

  setIsSubmitting(true)

  try {
    // Send email via your Nodemailer API
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.success) {
      setIsSubmitted(true)
      toast.success('Message sent successfully!')

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
      }, 3000)
    } else {
      toast.error('Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error('Nodemailer Error:', error)
    toast.error('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
