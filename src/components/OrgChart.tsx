import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import wirot_tangjareon from "../assets/people/wirot_tangjareon.jpg";
import teeranat_rujimetapas from "../assets/people/teeranat_rujimetapas.jpg";
import umapan_jareonying from "../assets/people/umapan_jareonying.jpg";
import tharisa_chaisunthornyothin from "../assets/people/tharisa_chaisunthornyothin.jpg";
import nuttapong_apinungul from "../assets/people/nuttapong_apinungul.jpg";
import wawta_prachmethegul from "../assets/people/wawta_prachmethegul.jpg";
import chonratee_potrotnanggul from "../assets/people/chonratee_potrotnanggul.jpg";
import thanawat_sitiwattanagul from "../assets/people/thanawat_sitiwattanagul.jpg";
import narumul_bunsnong from "../assets/people/narumul_bunsnong.png";



type Member = {
  name: string;
  role: string;
  image: string;
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


// TODO put down ids, and members
const org: Committee = {
  id: "main",
  title: "คณะกรรมการสมาคม",
  levels: [
    {
      label: "นายกสมาคม",
      members: [
        { name: "นายวิโรจน์ ตั้งเจริญ", role: "นายกสมาคม", image: wirot_tangjareon }
      ]
    },
    {
      label: "อุปนายก",
      members: [
        { name: "นายธีรนาถ รุจิเมธาภาส", role: "อุปนายก", image: teeranat_rujimetapas },
        { name: "นางสาวอุมาพันธุ์ เจริญยิ่ง", role: "อุปนายก", image: umapan_jareonying }
      ]
    },
    {
      members: [
        { name: "นางสาวธริศา ชัยสุนทรโยธิน", role: "เหรัญญิก", image: tharisa_chaisunthornyothin },
        { name: "นายณัฐพงษ์ อภินันท์กูล", role: "เลขาธิการ", image: nuttapong_apinungul },
        { name: "นางสาวแววตา ปราชญ์เมธีกุล", role: "นายทะเบียน", image: wawta_prachmethegul },
        { name: "นายชลธี พรโรจนางกูร", role: "กรรมการ", image: chonratee_potrotnanggul },
        { name: "ผศ.ดร. ธนาวัฒน์ สิริวัฒน์ธนกุล", role: "กรรมการ", image: thanawat_sitiwattanagul },
        { name: "นางสาวนฤมล บุญสนอง", role: "กรรมการ", image: narumul_bunsnong },
        // add more
      ]
    }
  ],
  children: [
    {
      id: "",
      title: "คณะกรรมการอุทธรณ์",
      levels: [],
      children: []
    },
    {
      id: "",
      title: "คณะกรรมการมาตรฐานวิชาชีพ",
      levels: [],
      children: [
        {
          id: "",
          title: "คณะกรรมการมาตรฐานการศึกษา",
          levels: [],
          children: []
        },
        {
          id: "",
          title: "คณะอนุกรรมการมาตรฐานการสอบ",
          levels: [],
          children: []
        },
        {
          id: "",
          title: "คณะอนุกรรมการมาตรฐานประสบการณ์การทำงานและจรรยาบรรณ",
          levels: [],
          children: []
        }
      ]
    },
    {
      id: "",
      title: "คณะกรรมการการตลาดและพัฒนาธุรกิจ",
      levels: [],
      children: [
        {
          id: "",
          title: "คณะอนุกรรมการการตลาด",
          levels: [],
          children: []
        },
        {
          id: "",
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
  return (
    <div className="text-center">
      <img
        src={m.image}
        alt={m.name}
        className={`mx-auto object-cover rounded-lg ${
          large ? "w-32 h-32" : "w-24 h-24"
        }`}
      />
      <p className="mt-2 font-medium">{m.name}</p>
      <p className="text-sm text-gray-500">{m.role}</p>
    </div>
  );
}

function Modal({ node, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-6 text-center">
          {node.title}
        </h2>

        <div className="space-y-8">
          {node.levels?.map((level, i) => (
            <div key={i} className="flex justify-center gap-8 flex-wrap">
              {level.members.map((m) => (
                <MemberCard key={m.name} m={m} large={i === 0} />
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 block mx-auto text-sm text-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
