/*
Organization chart in About
*/

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
  chartchai_meesukkho: "ดร. ชาติชาย มีสุขโข",
  chuchchawan_wayamsuwan: "นายชัชวาลย์ วยัมสุวรรณ",
  chonratee_potrotnanggul: "นายชลธี พรโรจนางกูร",
  dussanee_kreawpatinon: "นางสาวดุษณี เกลียวปฏินนท์",
  gazesatorn_chaiwanpen: "นายเกษตร ชัยวันเพ็ญ",
  gulranant_chantaiwo: "นางกุลนันท์ ซานไทโว",
  jarupan_intarung: "นางจารุพรรณ อินทรุ่ง",
  kanokthip_saichumint: "นางสาวกนกทิพย์ สายชุ่มอินทร์",
  narint_aekwongwiriya: "นายนรินทร์ เอกวงศ์วิริยะ",
  narumul_bunsnong: "นางสาวนฤมล บุญสนอง",
  nippich_govitvinichganon: "นายนิพพิชฌน์ โกวิทวณิชกานนท์",
  norodom_wanichruedee: "นายนโรโดม วาณิชฤดี",
  nuttapong_apinungul: "นายณัฐพงษ์ อภินันท์กูล",
  sagow_samrankong: "นางสาวสกาว สำราญคง",
  samra_lumsum: "นายสาระ ล่ำซำ",
  seksan_towiwat: "นายเสกสรร โตวิวัฒน์",
  somjin_sornpaisarn: "ดร.สมจินต์ ศรไพศาล",
  sugit_udomsirigul: "นายสุกิจ อุดมศิริกุล",
  teeranat_rujimetapas: "นายธีรนาถ รุจิเมธาภาส",
  thanawat_sitiwattanagul: "ผศ.ดร. ธนาวัฒน์ สิริวัฒน์ธนกุล",
  tharisa_chaisunthornyothin: "นางสาวธริศา ชัยสุนทรโยธิน",
  umapan_jareonying: "นางสาวอุมาพันธุ์ เจริญยิ่ง",
  waraporn_wibunkanaruk: "นางสาววราภรณ์ วิบูลคณารักษ์",
  wawta_prachmethegul: "นางสาวแววตา ปราชญ์เมธีกุล",
  win_chaisirichot: "นายวินย์ ฉายศิริโชติ",
  wirot_tangjareon: "นายวิโรจน์ ตั้งเจริญ",
  wornradech_punjatongka: "นายวรเดช ปัญจรงคะ",  
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


const org: Committee = {
  id: "main",
  title: "คณะกรรมการสมาคม",
  levels: [
    {
      members: [
        {person: "wirot_tangjareon", role: "นายกสมาคม"}
      ]
    },
    {
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
      levels: [
        {
          members: [
            {person: "wirot_tangjareon", role: "ประธาน"}
          ]
        },
        {
          members: [
            {person: "teeranat_rujimetapas", role: "กรรมการ"},
            {person: "nuttapong_apinungul", role: "กรรมการ"},
            {person: "somjin_sornpaisarn", role: "กรรมการ"}
          ]
        }
      ],
      children: [
        {
          id: "sub_educational_standards",
          title: "คณะกรรมการมาตรฐานการศึกษา",
          levels: [
            {
              members: [
                { person: "nuttapong_apinungul", role: "ประธาน" }
              ]
            },
            {
              members: [
                { person: "gazesatorn_chaiwanpen", role: "อนุกรรมการ" },
                { person: "chartchai_meesukkho", role: "อนุกรรมการ" },
                { person: "thanawat_sitiwattanagul", role: "อนุกรรมการ" },
                { person: "win_chaisirichot", role: "อนุกรรมการ" },
                { person: "wawta_prachmethegul", role: "อนุกรรมการ" },
                { person: "sagow_samrankong", role: "อนุกรรมการ" },
              ]
            }
          ],
        },
        {
          id: "sub_auditing_standards",
          title: "คณะอนุกรรมการมาตรฐานการสอบ",
          levels: [
            {
              members: [
                {person: "somjin_sornpaisarn", role: "ประธาน" }
              ]
            },
            {
              members: [
                { person: "chonratee_potrotnanggul", role: "อนุกรรมการ" },
                { person: "chuchchawan_wayamsuwan", role: "อนุกรรมการ" },
                { person: "waraporn_wibunkanaruk", role: "อนุกรรมการ" }
              ]
            }
          ],
        },
        {
          id: "sub_work_standards",
          title: "คณะอนุกรรมการมาตรฐานประสบการณ์การทำงานและจรรยาบรรณ",
          levels: [
            {
              members: [
                {person: "teeranat_rujimetapas", role: "ประธาน" }
              ]
            },
            {
              members: [
                {person: "jarupan_intarung", role: "อนุกรรมการ" },
                {person: "thanawat_sitiwattanagul", role: "อนุกรรมการ" },
                {person: "narumul_bunsnong", role: "อนุกรรมการ" },
                {person: "umapan_jareonying", role: "อนุกรรมการ" },
              ]
            }
          ],
        }
      ]
    },
    {
      id: "marketing_and_business",
      title: "คณะกรรมการการตลาดและพัฒนาธุรกิจ",
      levels: [
        {
          members: [
            {person: "wirot_tangjareon", role: "ประธาน"}
          ]
        },
        {
          members: [
            {person: "teeranat_rujimetapas", role: "กรรมการ"},
            {person: "umapan_jareonying", role: "กรรมการ"},
          ]
        }
      ],
      children: [
        {
          id: "sub_marketing",
          title: "คณะอนุกรรมการการตลาด",
          levels: [
            {
              members: [
                { person: "umapan_jareonying", role: "ประธาน" },
              ]
            },
            {
              members: [
                { person: "kanokthip_saichumint", role: "อนุกรรมการ" },
                { person: "dussanee_kreawpatinon", role: "อนุกรรมการ" },
                { person: "tharisa_chaisunthornyothin", role: "อนุกรรมการ" },
                { person: "narumul_bunsnong", role: "อนุกรรมการ" },
                { person: "narint_aekwongwiriya", role: "อนุกรรมการ" },
                { person: "norodom_wanichruedee", role: "อนุกรรมการ" },
                { person: "nippich_govitvinichganon", role: "อนุกรรมการ" },
                { person: "seksan_towiwat", role: "อนุกรรมการ" },
              ]
            }
          ],
        },
        {
          id: "sub_business",
          title: "คณะอนุกรรมการพัฒนาธุรกิจ",
          levels: [
            {
              members: [
                { person: "teeranat_rujimetapas", role: "ประธาน" },
              ]
            },
            { 
              members: [
                { person: "gulranant_chantaiwo", role: "อนุกรรมการ" },
                { person: "chonratee_potrotnanggul", role: "อนุกรรมการ" },
                { person: "wornradech_punjatongka", role: "อนุกรรมการ" },
                { person: "wawta_prachmethegul", role: "อนุกรรมการ" },
                { person: "sagow_samrankong", role: "อนุกรรมการ" },
                { person: "sugit_udomsirigul", role: "อนุกรรมการ" },
              ]
            }
          ],
        }
      ]
    },
  ],
};


function OrgNode({ node, onClick }: OrgNodeProps) {
  return (
    <TreeNode label={
      <button onClick={() => onClick(node)} className="px-4 py-2 rounded-xl bg-blue-200 hover:bg-blue-300 hover:cursor-pointer">
        {node.title}
      </button>
    }>
      {node.children?.map(child => (
        <OrgNode key={child.id} node={child} onClick={onClick} />
      ))}
    </TreeNode>
  );
}


export default function OrganizationChart() {
  const [selected, setSelected] = useState<Committee | null>(null);
  return (
    <>
      <Tree label={
        <button onClick={() => setSelected(org)} className="px-4 py-2 rounded-xl bg-blue-200 hover:bg-blue-300 hover:cursor-pointer">
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
        className={`
          mx-auto object-cover rounded-lg flex-1
          border border-gray-200 shadow-sm
          ${large ? "w-32 h-32" : "w-24 h-24"}
        `}
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
        {node.levels?.length ? (
          <div className="p-6 space-y-8 overflow-y-auto">
            {node.levels.map((level, i) => (
              <div key={i} className="flex flex-wrap justify-center gap-8">
                {level.members.map((m) => (
                  <div className="basis-[225px] flex justify-center">
                    <MemberCard
                      key={people[m.person].name}
                      m={m}
                      large={i === 0}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No member to show</p>
        )}

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
