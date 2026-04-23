import type { StaffContact } from "../data/Contact";


export function ContactCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="border border-black rounded-xl p-4 text-sm leading-relaxedm m-4">
      <p className="font-semibold">{title}</p>
      {children}
    </div>
  );
}

// function ImageCard() {
//   return ();
// }


export function StaffContactCard({ contact }: { contact: StaffContact }) {
  return (
    <ContactCard title={contact.responsibility}>
      <p>{contact.staff_name}</p>
      <p>โทรศัพท์: {contact.telephone}</p>
      <p>อีเมล: {contact.email}</p>
    </ContactCard>
  );
}
