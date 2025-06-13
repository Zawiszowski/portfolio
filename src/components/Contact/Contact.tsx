import React from 'react';
import { contactItems } from '../../data/portfolio';
import { ContactIcon, ContactDescription, ContactInfo, ContactItem, ContactText } from './Contact.styles';
import { Container, SectionTitle, Section } from '../../styles/Generic.styles';


export const Contact: React.FC = () => {
  return (
    <Section id="contact" bg="#f8fafc">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactDescription>
          Ready to collaborate on automotive technology solutions? 
          Let's build something amazing together!
        </ContactDescription>
        <ContactInfo>
          {contactItems.map((item, index) => (
            <ContactItem key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}>
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactText>{item.label}</ContactText>
            </ContactItem>
          ))}
        </ContactInfo>
      </Container>
    </Section>
  );
};

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the form data to your backend
//     alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <Section id="contact">
//       <Container>
//         <SectionTitle>Kontakt</SectionTitle>
//         <ContactForm onSubmit={handleSubmit}>
//           <FormGroup>
//             <Input
//               type="text"
//               name="name"
//               placeholder="Twoje imię"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Twój email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>
//           <FormGroup>
//             <TextArea
//               name="message"
//               placeholder="Twoja wiadomość"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>
//           <div style={{ textAlign: 'center' }}>
//             <Button type="submit">Wyślij wiadomość</Button>
//           </div>
//         </ContactForm>
//       </Container>
//     </Section>
//   );
// };

export default Contact;