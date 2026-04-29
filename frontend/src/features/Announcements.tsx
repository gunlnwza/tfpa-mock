import sample1 from "../assets/announcements/sample1.jpg"
import sample2 from "../assets/announcements/sample2.jpg"
import sample3 from "../assets/announcements/sample3.jpg"
import sample4 from "../assets/announcements/sample4.jpg"
import sample5 from "../assets/announcements/sample5.jpg"
import sample6 from "../assets/announcements/sample6.jpg"

type Announcement = {
  id: number;
  title: string;
  image: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    title: "การประชุมใหญ่สามัญประจำปี 2569 สมาคมนักวางแผนการเงินไทย",
    image: sample1
  },
  {
    id: 2,
    title: "ปฏิทินการอบรมหลักสูตรการวางแผนและการบริหารการเงินหลังเกษียณ",
    image: sample2
  },
  {
    id: 3,
    title: "ปฏิทินการอบรมหลักสูตรการวางแผนและการบริหารการเงินหลังเกษียณ",
    image: sample3
  },
  {
    id: 4,
    title: "วารสาร TFPA Magazine ฉบับที่ 1 เดือนมีนาคม 2569",
    image: sample4
  },
  {
    id: 5,
    title: "ประกาศรับสมัครสอบ",
    image: sample5
  },
  {
    id: 6,
    title: "ตารางสอบ",
    image: sample6
  },
];

function Card({ a }: { a: Announcement }) {
  return (
    <a
      href="#"
      className="group relative block transition duration-300 ease-in-out hover:-translate-y-2"
    >
      <div className={`
        relative w-150 rounded-xl overflow-hidden shadow-md border border-gray-300
      `}>

        {/* Image */}
        <img
          src={a.image}
          alt={a.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />

        {/* Text */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 
                        translate-y-4 opacity-0 
                        group-hover:translate-y-0 group-hover:opacity-100 
                        transition duration-300">
          <p className="text-white text-sm font-semibold line-clamp-2">
            {a.title}
          </p>
        </div> */}

      </div>
    </a>
  );
}

export function Announcements() {
  return (
    <section className="py-12 my-4">
      <div className="mx-4 mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-center">ประกาศสำคัญ</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">ดูทั้งหมด →</a>  {/* TODO link to /announcement */}
      </div>

      <div className="flex gap-6 overflow-x-auto p-4 scrollbar-hide">
        {announcements.map((a) => (
          <Card a={a} />
        ))}
      </div>
    </section>
  );
}
