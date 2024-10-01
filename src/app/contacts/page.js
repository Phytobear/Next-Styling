export default function ContactsPage() {
    return(

        <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <imput type="email" id="email" name="email" required />
          <button type="submit">Send</button>
        </form>
      </section>
    )
}