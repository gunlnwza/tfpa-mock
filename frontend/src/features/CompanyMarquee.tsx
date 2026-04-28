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

type LogoKey = keyof typeof companyImages;

type Company = {
  name: string;
  logo: LogoKey;
  url: string;
}

const companies: Company[] = [
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


function Card({ company }: { company: Company }) {
  return (
    <a href={company.url}>
      <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-200">
        <img src={companyImages[company.logo]} className="max-w-[70%] max-h-[70%] object-contain" />
      </div>
    </a>
  );
}

function Row({ direction = "right", offset = false }) {
  // duplicate for toroidal effect
  const loop = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden p-4">
      <div
        className={`
          flex gap-4 w-max
          ${direction === "right" ? "animate-marquee-right" : "animate-marquee-left"}
        `}
        style={{
          transform: offset ? "translateX(-50%)" : undefined,
        }}
      >
        {loop.map((company, i) => (
          <Card key={i} company={company} />
        ))}
      </div>
    </div>
  );
}


export function CompanyMarquee() {
  return (
    <div className="my-4">
      <h2 className="text-center text-lg">สมาชิกนิติบุคคล</h2>
      <Row />
    </div>
  );
}
