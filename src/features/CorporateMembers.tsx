/*
Company member strip in Home
*/

const rawImages = import.meta.glob("../assets/logos/*.png", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const companyImages: Record<string, string> = Object.fromEntries(
  Object.entries(rawImages).map(([path, img]) => {
    const name = path.split("/").pop()?.replace(".png", "")!;
    return [name, img];
  })
);

console.log(companyImages);

type LogoKey = keyof typeof companyImages;

type Company = {
  name: string;
  logo: LogoKey;
  url: string;
}

const corporate_members: Company[] = [
    { name: "AIA", logo: "aia", url: "https://www.aia.co.th/th" },
    { name: "Allianz Ayudhya", logo: "allianz_ayudhya", url: "https://www.allianz.co.th/en_TH.html" },
    { name: "Bangkok Bank", logo: "bangkok_bank", url: "https://www.bangkokbank.com/" },
    { name: "Bangkok Life", logo: "bangkok_life", url: "https://www.bangkoklife.com/th" },
    { name: "BBLAM", logo: "bblam", url: "https://www.bblam.co.th/" },
    { name: "Bualuang Securities", logo: "bualuang_securities", url: "https://www.bualuang.co.th/" },
    { name: "Bualuang Asset", logo: "bualuang_asset", url: "https://www.bcap.co.th/" },
    { name: "Eastspring", logo: "eastspring", url: "https://www.tmbameastspring.com/" },
    { name: "InnovestX", logo: "innovest_x", url: "http://www.scbs.com/" },
    { name: "KBank", logo: "kbank", url: "https://www.kasikornbank.com/" },
    { name: "KKP", logo: "kkp", url: "https://www.kiatnakin.co.th/th/home" },
    { name: "Krungsri", logo: "krungsri", url: "https://www.krungsri.com/bank/th/home.html" },
    { name: "Krungsri Asset", logo: "krungsri_asset", url: "https://www.krungsriasset.com/TH/Home.html" },
    { name: "Krungthai", logo: "krungthai", url: "https://krungthai.com/" },
    { name: "KTAM", logo: "ktam", url: "https://www.ktam.co.th/th/Default.aspx" },
    { name: "Muang Thai", logo: "muang_thai", url: "https://www.muangthai.co.th/" },
    { name: "Phillip Capital", logo: "phillip_capital", url: "https://www.phillipcapital.com/Home" },
    { name: "SCB", logo: "scb", url: "https://www.scb.co.th" },
    { name: "SCB Asset", logo: "scb_asset", url: "https://www.scbam.com/" },
    { name: "SET", logo: "set", url: "https://www.set.or.th/" },
    { name: "Thai Life", logo: "thai_life", url: "https://www.thailife.com/" },
    { name: "TISCO", logo: "tisco", url: "https://www.tisco.co.th/" },
    { name: "Union Wealth", logo: "union_wealth", url: "https://www.uwealth.co.th/" },
    { name: "UOB", logo: "uob", url: "https://www.uob.co.th/default/index.page" },
    { name: "UOB Asset", logo: "uob_asset", url: "https://www.uobam.co.th/th/home" },
    { name: "Yuanta", logo: "yuanta", url: "http://www.yuanta.co.th/" },
];
  

export default function CorporateMembers() {
  return (
    <section className="py-5">
      <h2 className="text-center">Corporate Members</h2>
      <div className="grid grid-cols-13 gap-6">
        {corporate_members.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
            <img
              src={companyImages[c.logo]}
              alt={c.name}
              className="mx-auto h-12 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
