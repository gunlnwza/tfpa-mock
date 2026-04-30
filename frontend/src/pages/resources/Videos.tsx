import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";
import React from "react";
import { Repeat } from "../../utils";

type VideoCardProps = {
  title: string;
  href: string;
  videoId: string;
};

export function FeaturedVideo({ title, href, videoId }: VideoCardProps) {
  const thumbnails = [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ];

  return (
    <div className="flex justify-center">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group max-w-4xl"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="w-full object-cover rounded-2xl border border-gray-200 shadow-md"
          src={thumbnails[0]}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes("maxres")) {
              target.src = thumbnails[1];
            } else if (target.src.includes("sddefault")) {
              target.src = thumbnails[2];
            }
          }}
          />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* text */}
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold">
            {title}
          </h3>
          <span className="inline-block mt-3 text-sm font-semibold group-hover:underline">
            ▶ ดูบน YouTube →
          </span>
        </div>
      </div>
    </a>
  </div>
  );
}


// [ Fallback ]
// <div className="w-full h-[130px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
  
//   {/* subtle play icon */}
//   <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow">
//     ▶
//   </div>

//   {/* optional watermark */}
//   <span className="absolute bottom-2 text-[10px] text-gray-500">
//     TFPA Channel
//   </span>
// </div>

export function VideoCard({ title, href, videoId }: VideoCardProps) {
  const thumbnails = [
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[250px] max-w-[250px] group"
    >
      <div className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition">
        <img
          src={thumbnails[0]}
          className="w-full h-[140px] object-cover"
        />
      </div>

      <p className="mt-2 text-sm font-medium line-clamp-2 group-hover:underline">
        {title}
      </p>
    </a>
  );
}

export function VideoRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-lg">{title}</h4>
        <a
          href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw"
          target="_blank" rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          ดูทั้งหมด →
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {children}
      </div>
    </div>
  );
}


export function YouTubeCTA() {
  return (
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-600">
        ดูวิดีโอทั้งหมดได้ที่ช่อง สมาคมนักวางแผนการเงินไทย TFPA
      </p>

      <a
        href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw?"
        target="_blank" rel="noopener noreferrer"
        className="inline-block mt-3 px-6 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
      >
        ไปที่ YouTube ↗
      </a>
    </div>
  );
}


export default function ResourcesVideos() {
  return (
    <Page>
      <PageHeader title="วิดีโอ" margin={0} />
      <p className="text-lg text-gray-600 mb-8">เรียนรู้การวางแผนการเงินจากผู้เชี่ยวชาญ CFP® ผ่านบทสัมภาษณ์ เคสจริง และมุมมองจากมืออาชีพ</p>
      
      <FeaturedVideo
        title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
        href="https://www.youtube.com/watch?v=FPDIajtvtMs"
        videoId="FPDIajtvtMs"
      />
      
      <VideoRow title="วางแผนการเงิน">
        <Repeat n={1}>
          <VideoCard
            title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
            href="https://www.youtube.com/watch?v=FPDIajtvtMs"
            videoId="FPDIajtvtMs"
          />
          <VideoCard
            title="Life Long Investing ลงทุนวิทยาฉบับ 50+ SS1 | EP.1 ความรู้ด้านการลงทุนจำเป็นแค่ไหนในวัยใกล้เกษียณ"
            href="https://www.youtube.com/watch?v=hpyWP2NvDnA"
            videoId="hpyWP2NvDnA"
          />
          <VideoCard
            title="Sandwich Generation ในไทย 80% การเงินพัง ทำอย่างไร ให้หลุดจากวังวน ? | Talk ลงทุนแมน EP.49"
            href="https://www.youtube.com/watch?v=T_o62QbInQU"
            videoId="T_o62QbInQU"
          />
          <VideoCard
            title={`รายจ่ายเพียบ-หนี้ท่วม แต่อยากออม !! แจกทริค "รวยก่อนแก่" พลิกชีวิตการเงิน | Wealth Me Please EP.171`}
            href="https://www.youtube.com/watch?v=svZxjelQ4h0"
            videoId="svZxjelQ4h0"
          />
          <VideoCard
            title="เรื่องต้องรู้.. ประกันทุพพลภาพ"
            href="https://www.youtube.com/watch?v=hjaVtJRTSfk&t=1s"
            videoId="hjaVtJRTSfk"
          />
          <VideoCard
            title="ใช้เงินอย่างมีเป้าหมาย จุดเริ่มต้นของแผนการเงินที่ทำได้จริง"
            href="https://www.youtube.com/watch?v=VfdY1p-wzp4"
            videoId="VfdY1p-wzp4"
          />
        </Repeat>
      </VideoRow>
  
      <VideoRow title="CFP® Professional Talk | เสียงจากนักวางแผนการเงินมืออาชีพ">
        <Repeat n={2}>
          <VideoCard
            title="อนาคตของนักวางแผนการเงิน CFP®"
            href="https://www.youtube.com/watch?v=vuv1vpjRGSs"
            videoId="vuv1vpjRGSs"
          />
          <VideoCard
            title="CFP Professional Talk EP.12 นักวางแผนการเงิน CFP จัดพอร์ตหุ้นไทย ไปต่อ หรือชะลอไว้"
            href="https://www.youtube.com/watch?v=L9pnoYYe_JQ&t=6s"
            videoId="L9pnoYYe_JQ"
          />
          <VideoCard
            title="Money Life & Talk by CFP Professional EP.61 เรือนเกษียณสุข"
            href="https://www.youtube.com/watch?v=vaXpPe7EmDM&t=4s"
            videoId="vaXpPe7EmDM"
          />
        </Repeat>
      </VideoRow>

      <VideoRow title="Case Day">
        <Repeat n={10}>
          <VideoCard
            title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
            href="https://www.youtube.com/watch?v=TtBGHApar9U"
            videoId="TtBGHApar9U"
          />
        </Repeat>
      </VideoRow>

      <YouTubeCTA />
    </Page>
  );
}
