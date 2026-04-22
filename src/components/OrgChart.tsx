import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";


const rawImages = import.meta.glob<string>("../assets/people/*.jpg", {
  eager: true,
  import: "default"
});


const peopleImages: Record<string, string> = Object.fromEntries(
  Object.entries(rawImages).map(([path, img]) => {
    const name = path.split("/").pop()?.replace(".jpg", "")!;
    return [name, img];
  })
);


type Person = {
  name: string;
  image: string;
};

type Input = Record<string, string>;

export function makePeople(input: Input): Record<string, Person> {
  return Object.fromEntries(
    Object.entries(input).map(([key, name]) => [
      key,
      {
        name,
        image: peopleImages[key],
      },
    ])
  );
}

// usage
const people = makePeople({
  wirot_tangjareon: "นายวิโรจน์ ตั้งเจริญ",
  teeranat_rujimetapas: "นายธีรนาถ รุจิเมธาภาส",
  umapan_jareonying: "นางสาวอุมาพันธุ์ เจริญยิ่ง",
  tharisa_chaisunthornyothin: "นางสาวธริศา ชัยสุนทรโยธิน",
  nuttapong_apinungul: "นายณัฐพงษ์ อภินันท์กูล",
  wawta_prachmethegul: "นางสาวแววตา ปราชญ์เมธีกุล",
  chonratee_potrotnanggul: "นายชลธี พรโรจนางกูร",
  thanawat_sitiwattanagul: "ผศ.ดร. ธนาวัฒน์ สิริวัฒน์ธนกุล",
  narumul_bunsnong: "นางสาวนฤมล บุญสนอง",
  nippich_govitvinichganon: "นายนิพพิชฌน์ โกวิทวณิชกานนท์",
  sagow_samrankong: "นางสาวสกาว สำราญคง",
  somjin_sornpaisarn: "ดร.สมจินต์ ศรไพศาล",
  samra_lumsum: "นายสาระ ล่ำซำ",
  sugit_udomsirigul: "นายสุกิจ อุดมศิริกุล",
  seksan_towiwat: "นายเสกสรร โตวิวัฒน์",
});


type PersonKey = keyof typeof people;


type Member = {
  person: PersonKey;
  role: string;
};

type MemberLevel = {
  label?: string;     // optional (e.g. "Vice Presidents")
  members: Member[];
};

type Committee = {
  id: string;
  title: string;
  levels: MemberLevel[];
  children?: Committee[];
};

type OrgNodeProps = {
  node: Committee;
  onClick: (node: Committee) => void;
};

type ModalProps = {
  node: Committee;
  onClose: () => void;
};


// TODO put members
const org: Committee = {
  id: "main",
  title: "คณะกรรมการสมาคม",
  levels: [
    {
      // label: "นายกสมาคม",
      members: [
        {person: "wirot_tangjareon", role: "นายกสมาคม"}
      ]
    },
    {
      // label: "อุปนายก",
      members: [
        { person: 'teeranat_rujimetapas', role: "อุปนายก" },
        { person: 'umapan_jareonying', role: "อุปนายก" }
      ]
    },
    {
      members: [
        { person: "tharisa_chaisunthornyothin", role: "เหรัญญิก" },
        { person: "nuttapong_apinungul", role: "เลขาธิการ" },
        { person: "wawta_prachmethegul", role: "นายทะเบียน" },

        { person: "chonratee_potrotnanggul", role: "กรรมการ" },
        { person: "thanawat_sitiwattanagul", role: "กรรมการ" },
        { person: "narumul_bunsnong", role: "กรรมการ" },
        
        { person: "nippich_govitvinichganon", role: "กรรมการ" },
        { person: "sagow_samrankong", role: "กรรมการ" },
        { person: "somjin_sornpaisarn", role: "กรรมการ" },

        { person: "samra_lumsum", role: "กรรมการ" },
        { person: "sugit_udomsirigul", role: "กรรมการ" },
        { person: "seksan_towiwat", role: "กรรมการ" },
      ]
    }
  ],
  children: [
    {
      id: "appeals",
      title: "คณะกรรมการอุทธรณ์",
      levels: [],
      children: []
    },
    {
      id: "professional_standards",
      title: "คณะกรรมการมาตรฐานวิชาชีพ",
      levels: [],
      children: [
        {
          id: "sub_educational_standards",
          title: "คณะกรรมการมาตรฐานการศึกษา",
          levels: [],
          children: []
        },
        {
          id: "sub_auditing_standards",
          title: "คณะอนุกรรมการมาตรฐานการสอบ",
          levels: [],
          children: []
        },
        {
          id: "sub_work_standards",
          title: "คณะอนุกรรมการมาตรฐานประสบการณ์การทำงานและจรรยาบรรณ",
          levels: [],
          children: []
        }
      ]
    },
    {
      id: "marketing_and_business",
      title: "คณะกรรมการการตลาดและพัฒนาธุรกิจ",
      levels: [],
      children: [
        {
          id: "sub_marketing",
          title: "คณะอนุกรรมการการตลาด",
          levels: [],
          children: []
        },
        {
          id: "sub_business",
          title: "คณะอนุกรรมการพัฒนาธุรกิจ",
          levels: [],
          children: []
        }
      ]
    },
  ],
};


function OrgNode({ node, onClick }: OrgNodeProps) {
  return (
    <TreeNode label={
      <button onClick={() => onClick(node)} className="px-4 py-2 rounded-xl bg-blue-200 hover:bg-blue-300">
        {node.title}
      </button>
    }>
      {node.children?.map(child => (
        <OrgNode key={child.id} node={child} onClick={onClick} />
      ))}
    </TreeNode>
  );
}


export default function OrgChart() {
  const [selected, setSelected] = useState<Committee | null>(null);
  return (
    <>
      <Tree label={
        <button onClick={() => setSelected(org)} className="px-4 py-2 rounded-xl bg-blue-200 hover:bg-blue-300">
          {org.title}
        </button>
      }>
        {org.children?.map(child => (
          <OrgNode key={child.id} node={child} onClick={setSelected} />
        ))}
      </Tree>
      {selected && <Modal node={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function MemberCard({ m, large = false }: { m: Member; large?: boolean }) {
  const p = people[m.person];
  return (
    <div className="text-center">
      <img
        src={p.image}
        alt={p.name}
        className={`mx-auto object-cover rounded-lg ${
          large ? "w-32 h-32" : "w-24 h-24"
        }`}
      />
      <p className="mt-2 font-medium">{p.name}</p>
      <p className="text-sm text-gray-500">{m.role}</p>
    </div>
  );
}


function Modal({ node, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[80vh] flex flex-col">
        
        {/* Header */}
        <h2 className="text-xl font-bold p-6 pb-0 text-center">
          {node.title}
        </h2>

        {/* Scrollable content */}
        <div className="p-6 space-y-8 overflow-y-auto">
          {node.levels?.map((level, i) => (
            <div key={i} className="flex justify-center gap-8 flex-wrap">
              {level.members.map((m) => (
                <MemberCard key={people[m.person].name} m={m} large={i === 0} />
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="p-4 text-sm text-blue-600"
        >
          Close
        </button>

      </div>
    </div>
  );
}
