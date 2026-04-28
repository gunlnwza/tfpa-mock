import { PageHeader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";

import featuredThumbnail from "../../assets/video_thumbnails/retirement.jpg"

type VideoCardProps = {
  title: string;
  href: string;
  thumbnail?: string;
};

export function FeaturedVideo({ title, thumbnail, href }: VideoCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={thumbnail} className="w-full h-[500px] object-cover rounded-2xl" />

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
  );
}
import { useState } from "react";


export function VideoCard({ title, thumbnail, href }: VideoCardProps) {
  const [imgError, setImgError] = useState(false);

  const showFallback = !thumbnail || imgError;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="min-w-[220px] max-w-[220px] group">
      <div className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition">
        
        {!showFallback ? (
          <img
            src={thumbnail}
            onError={() => setImgError(true)}
            className="w-full h-[130px] object-cover"
          />
        ) : (
          <div className="w-full h-[130px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
            
            {/* subtle play icon */}
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow">
              ▶
            </div>

            {/* optional watermark */}
            <span className="absolute bottom-2 text-[10px] text-gray-500">
              TFPA Channel
            </span>
          </div>
        )}

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
          href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw?sub_confirmation=1"
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
        href="https://www.youtube.com/channel/UC6rMod3YUUYv-yGnkIg5GEw?sub_confirmation=1"
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
        thumbnail={featuredThumbnail}
      />

      <VideoRow title="วางแผนการเงิน">
        <VideoCard
          title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
          href="https://www.youtube.com/watch?v=FPDIajtvtMs"
          thumbnail={featuredThumbnail}
        />
        <VideoCard
          title="Money Life & Talk by CFP Professional EP.61 เรือนเกษียณสุข"
          href="https://www.youtube.com/watch?v=vaXpPe7EmDM&t=4s"
        />
        <VideoCard
          title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
          href="https://www.youtube.com/watch?v=FPDIajtvtMs"
          
        />
        <VideoCard
          title="Money Life & Talk by CFP Professional EP.61 เรือนเกษียณสุข"
          href="https://www.youtube.com/watch?v=vaXpPe7EmDM&t=4s"
        />
        <VideoCard
          title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
          href="https://www.youtube.com/watch?v=FPDIajtvtMs"

        />
        <VideoCard
          title="Money Life & Talk by CFP Professional EP.61 เรือนเกษียณสุข"
          href="https://www.youtube.com/watch?v=vaXpPe7EmDM&t=4s"
        />
      </VideoRow>
  
      <VideoRow title="CFP Professional Talk">
        <VideoCard
          title="อนาคตของนักวางแผนการเงิน CFP®"
          href="https://www.youtube.com/watch?v=vuv1vpjRGSs"
        />
        <VideoCard
          title="เรื่องต้องรู้.. ประกันทุพพลภาพ"
          href="https://www.youtube.com/watch?v=hjaVtJRTSfk&t=1s"
        />
        <VideoCard
          title="CFP Professional Talk EP.12 นักวางแผนการเงิน CFP จัดพอร์ตหุ้นไทย ไปต่อ หรือชะลอไว้"
          href="https://www.youtube.com/watch?v=L9pnoYYe_JQ&t=6s"
        />
        <VideoCard
          title="อนาคตของนักวางแผนการเงิน CFP®"
          href="https://www.youtube.com/watch?v=vuv1vpjRGSs"
        />
        <VideoCard
          title="เรื่องต้องรู้.. ประกันทุพพลภาพ"
          href="https://www.youtube.com/watch?v=hjaVtJRTSfk&t=1s"
        />
        <VideoCard
          title="CFP Professional Talk EP.12 นักวางแผนการเงิน CFP จัดพอร์ตหุ้นไทย ไปต่อ หรือชะลอไว้"
          href="https://www.youtube.com/watch?v=L9pnoYYe_JQ&t=6s"
        />
      </VideoRow>

      <VideoRow title="Case Day">
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
        <VideoCard
          title="Case Day: การวางแผนแบบองค์รวม โดยคุณศิริรัตน์ ตานะเศรษฐ CFP®"
          href="https://www.youtube.com/watch?v=TtBGHApar9U"
        />
      </VideoRow>

      <YouTubeCTA />
    </Page>
  );
}
