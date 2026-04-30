import { PageHeader, PageSubheader } from "../../components/layout/global/PageHeader";
import { Page } from "../../components/layout/Page";
import { PrimaryCTAButton } from "../../components/ui/Button";
import { Center } from "../../components/primitive/Center";
import { Section } from "../../components/layout/Section";
import { FeaturedVideo } from "../resources/Videos";

export default function ForGeneralAudience() {
  return (
    <Page>
      <PageHeader title="บุคคลทั่วไป" />

      <Section title="การวางแผนการเงิน">
        <p className="mb-8">การวางแผนการเงินที่ดีเริ่มต้นจากการเข้าใจเป้าหมายของตนเอง ไม่ว่าจะเป็นการออมเพื่อเกษียณ การลงทุนเพื่อเพิ่มมูลค่า หรือการบริหารความเสี่ยงในชีวิตประจำวัน เนื้อหานี้จัดทำขึ้นเพื่อให้ผู้อ่านสามารถศึกษาแนวทางเบื้องต้น และนำไปปรับใช้ให้เหมาะสมกับสถานการณ์ทางการเงินของตนเองได้อย่างมีประสิทธิภาพ</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
        <p className="mb-8">(เนื้อหาที่ทำให้คนอยากวางแผนการเงิน)</p>
      </Section>

      <Center>
        <PrimaryCTAButton to="/find_planner">รับบริการวางแผนการเงิน</PrimaryCTAButton>
      </Center>

      <div className="mt-6">
        <Section title="มุมความรู้">
          <FeaturedVideo
            title="แผนเกษียณพัง เพราะมองไม่เห็นภาพรวมทางการเงิน | ลงทุนวิทยาฉบับ50+ SS2 EP.1"
            href="https://www.youtube.com/watch?v=FPDIajtvtMs"
            videoId="FPDIajtvtMs"
          />
      
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
          <p className="mt-8 mb-8">(เนื้อหาที่น่าสนใจเกี่ยวกับการวางแผนการเงิน)</p>
        </Section>
      </div>

    </Page>
  );
}
