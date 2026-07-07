/**
 * All site content lives in this one file, in both languages.
 *
 * - Every visible string is a pair: { vi: "...", en: "..." }.
 * - Square brackets like "[năm tốt nghiệp]" mark placeholders that must be
 *   filled in before publishing. Run `npm run check` to list remaining ones.
 * - Facts here must stay LinkedIn-safe: nothing that would be unsafe on a
 *   public profile. See docs/privacy-rules.md before editing.
 */

export type Locale = 'vi' | 'en';

export interface Bi {
  vi: string;
  en: string;
}

export const locales: Locale[] = ['vi', 'en'];

export const site = {
  name: 'Hung Doan',

  /** Base URL of the deployed site (used for canonical/OG tags). */
  url: 'https://hungngdoan.github.io/hung-doan/',

  title: {
    vi: 'Hung Doan · Kỹ sư phần mềm',
    en: 'Hung Doan · Software Engineer',
  } satisfies Bi,

  description: {
    vi: 'Trang cá nhân của Hung Doan: kỹ sư phần mềm làm việc với hệ thống dữ liệu trên cloud, chuẩn bị học thạc sĩ Trí tuệ nhân tạo tại The University of Texas at Austin. Học vấn, công việc, và cách sống.',
    en: 'Personal website of Hung Doan: software engineer working on cloud data systems, preparing for a master’s in Artificial Intelligence at The University of Texas at Austin. Education, work, and the way I live.',
  } satisfies Bi,

  links: {
    linkedin: 'https://www.linkedin.com/in/nguyendoan001/',
    github: 'https://github.com/hungngdoan',
    journal: 'https://hungngdoan.github.io/hung-blog/',
    msaiPrep: 'https://hungngdoan.github.io/MSAI-2026-Prep/',
    /** Optional public contact email. Leave empty to hide it from the page. */
    email: '',
  },

  nav: [
    { id: 'about', label: { vi: 'Đôi dòng', en: 'A few lines' } },
    { id: 'education', label: { vi: 'Học vấn', en: 'Education' } },
    { id: 'work', label: { vi: 'Công việc', en: 'Work' } },
    { id: 'principles', label: { vi: 'Cách sống', en: 'Principles' } },
  ],

  hero: {
    kicker: { vi: 'Kỹ sư phần mềm', en: 'Software engineer' },
    lead: {
      vi: 'Tôi xây hệ thống dữ liệu trên nền tảng cloud cho một tập đoàn tài chính thuộc nhóm Fortune 500, và mùa thu 2026 bắt đầu chương trình thạc sĩ Trí tuệ nhân tạo tại The University of Texas at Austin.',
      en: 'I build cloud data systems at a Fortune 500 financial services firm, and in the fall of 2026 I begin a master’s in Artificial Intelligence at The University of Texas at Austin.',
    },
    belief: {
      vi: 'Tôi tin vào việc học nghiêm túc, làm việc bền bỉ, và giữ lời.',
      en: 'I believe in serious study, steady work, and keeping my word.',
    },
    anchors: [
      {
        label: { vi: 'Học vấn', en: 'Education' },
        value: {
          vi: 'B.S. & B.B.A., Texas Christian University',
          en: 'B.S. & B.B.A., Texas Christian University',
        },
        sub: {
          vi: 'M.S. Trí tuệ nhân tạo, UT Austin · 2026',
          en: 'M.S. in Artificial Intelligence, UT Austin · 2026',
        },
      },
      {
        label: { vi: 'Chứng chỉ', en: 'Credentials' },
        value: {
          vi: 'Google Cloud Professional Cloud Architect',
          en: 'Google Cloud Professional Cloud Architect',
        },
        sub: {
          vi: 'AWS Developer Associate · GenAI Leader',
          en: 'AWS Developer Associate · GenAI Leader',
        },
      },
      {
        label: { vi: 'Công việc', en: 'Work' },
        value: {
          vi: 'Kỹ sư phần mềm, mảng dữ liệu trên cloud',
          en: 'Software engineer, cloud data platforms',
        },
        sub: {
          vi: 'Tập đoàn tài chính · Fortune 500',
          en: 'Fortune 500 financial services',
        },
      },
    ],
  },

  about: {
    id: 'about',
    title: { vi: 'Đôi dòng', en: 'A few lines' },
    whisper: { vi: 'A few lines', en: 'Đôi dòng' },
    paragraphs: [
      {
        vi: 'Tôi là kỹ sư phần mềm, làm việc với dữ liệu: những hệ thống thu nhận, xử lý và biến dữ liệu thô thành thứ con người có thể tin và dùng được. Nghề này dạy tôi một điều: sự chính xác không đến từ tài năng, mà đến từ kỷ luật.',
        en: 'I am a software engineer who works with data: systems that take in raw information and turn it into something people can trust and use. The work has taught me one thing above all: precision does not come from talent. It comes from discipline.',
      },
      {
        vi: 'Tôi lớn lên với một niềm tin đơn giản: học đến nơi đến chốn, làm việc tử tế, giữ lời đã hứa. Ba điều đó không tạo ra một cuộc sống ồn ào. Chúng tạo ra một cuộc sống vững.',
        en: 'I grew up with a simple set of beliefs: study properly, work honestly, keep your word. They do not make for a loud life. They make for a steady one.',
      },
      {
        vi: 'Trang này không phải hồ sơ xin việc. Nó là một bản ghi ngắn, để ai muốn biết tôi là người thế nào có thể đọc trong năm phút: tôi học gì, làm gì, và sống dựa trên điều gì.',
        en: 'This page is not a résumé. It is a short record, written so that anyone who wants to know who I am can read it in five minutes: what I studied, what I do, and what I live by.',
      },
    ],
  },

  education: {
    id: 'education',
    title: { vi: 'Học vấn', en: 'Education' },
    whisper: { vi: 'Education', en: 'Học vấn' },
    intro: {
      vi: 'Gia đình tôi coi việc học là nền móng. Tôi giữ điều đó theo cách của mình: học có mục tiêu, học liên tục, và không xem tấm bằng nào là điểm dừng.',
      en: 'My family treats education as a foundation. I carry that in my own way: studying with intent, studying continuously, and treating no degree as a finish line.',
    },
    entries: [
      {
        degree: {
          vi: 'Thạc sĩ Trí tuệ nhân tạo (M.S. in Artificial Intelligence)',
          en: 'M.S. in Artificial Intelligence',
        },
        school: {
          vi: 'The University of Texas at Austin',
          en: 'The University of Texas at Austin',
        },
        time: { vi: 'Nhập học mùa thu 2026', en: 'Incoming, Fall 2026' },
        detail: {
          vi: 'Chương trình sau đại học về trí tuệ nhân tạo: machine learning, deep learning và các hệ thống AI ứng dụng. Quá trình tự ôn luyện trước khi nhập học được tôi ghi lại công khai.',
          en: 'Graduate study in artificial intelligence: machine learning, deep learning, and applied AI systems. I keep a public log of my preparation for the program.',
        },
        link: {
          href: 'https://hungngdoan.github.io/MSAI-2026-Prep/',
          label: { vi: 'Nhật ký ôn luyện', en: 'Preparation log' },
        },
      },
      {
        degree: {
          vi: 'Cử nhân Khoa học Máy tính (B.S. in Computer Science)',
          en: 'B.S. in Computer Science',
        },
        school: {
          vi: 'Texas Christian University',
          en: 'Texas Christian University',
        },
        time: {
          vi: '[năm vào trường] – [năm tốt nghiệp]',
          en: '[start year] – [graduation year]',
        },
        detail: {
          vi: 'Nền tảng khoa học máy tính: cấu trúc dữ liệu, giải thuật, hệ thống, cơ sở dữ liệu. [Bổ sung môn học tiêu biểu hoặc thành tích học tập nếu muốn.]',
          en: 'Core computer science: data structures, algorithms, systems, databases. [Add selected coursework or academic honors if desired.]',
        },
      },
      {
        degree: {
          vi: 'Cử nhân Quản trị Kinh doanh, Hệ thống Thông tin (B.B.A. in Business Information Systems)',
          en: 'B.B.A. in Business Information Systems',
        },
        school: {
          vi: 'Texas Christian University',
          en: 'Texas Christian University',
        },
        time: {
          vi: '[năm vào trường] – [năm tốt nghiệp]',
          en: '[start year] – [graduation year]',
        },
        detail: {
          vi: 'Bằng cử nhân thứ hai, về hệ thống thông tin trong kinh doanh: hiểu cách doanh nghiệp vận hành, để xây công nghệ phục vụ đúng chỗ.',
          en: 'A second bachelor’s degree, in business information systems: understanding how organizations run, so that the technology serves the right place.',
        },
      },
    ],
  },

  work: {
    id: 'work',
    title: { vi: 'Công việc', en: 'Work' },
    whisper: { vi: 'Work', en: 'Công việc' },
    intro: {
      vi: 'Tôi làm việc trong ngành tài chính, nơi dữ liệu sai một con số cũng là chuyện lớn. Môi trường đó rèn thói quen làm cẩn thận, theo quy trình, và chịu trách nhiệm đến cùng.',
      en: 'I work in finance, where a single wrong number in the data is a serious matter. That environment builds habits: work carefully, follow process, own the outcome.',
    },
    entries: [
      {
        role: { vi: 'Kỹ sư phần mềm', en: 'Software Engineer' },
        org: {
          vi: 'Tập đoàn dịch vụ tài chính thuộc nhóm Fortune 500',
          en: 'A Fortune 500 financial services firm',
        },
        time: { vi: '[năm bắt đầu] – nay', en: '[start year] – present' },
        detail: {
          vi: 'Xây và vận hành các pipeline dữ liệu trên Google Cloud: Apache Beam, Dataflow, BigQuery, Pub/Sub, Cloud Composer, Terraform. Viết dịch vụ backend bằng Java, Spring Boot và Python. Mục tiêu sau cùng luôn giống nhau: dữ liệu đến đúng nơi, đúng dạng, và đáng tin.',
          en: 'I build and operate data pipelines on Google Cloud: Apache Beam, Dataflow, BigQuery, Pub/Sub, Cloud Composer, Terraform. I write backend services in Java, Spring Boot, and Python. The goal is always the same: data that arrives in the right place, in the right shape, and can be trusted.',
        },
      },
      // To add earlier roles, copy the block above and adjust. Keep every
      // entry LinkedIn-safe: public titles, generalized descriptions only.
    ],
  },

  credentials: {
    id: 'credentials',
    title: { vi: 'Chứng chỉ', en: 'Credentials' },
    whisper: { vi: 'Credentials', en: 'Chứng chỉ' },
    intro: {
      vi: 'Chứng chỉ không thay được kinh nghiệm, nhưng là cách tôi buộc mình học có hệ thống. Mỗi chứng chỉ dưới đây đều kiểm chứng được.',
      en: 'Certifications are no substitute for experience, but they are how I force myself to study systematically. Each one below can be verified.',
    },
    verifyLabel: { vi: 'Xem chứng nhận', en: 'View credential' },
    items: [
      {
        name: {
          vi: 'Google Cloud Professional Cloud Architect',
          en: 'Google Cloud Professional Cloud Architect',
        },
        issuer: { vi: 'Google Cloud', en: 'Google Cloud' },
        href: 'https://www.credly.com/badges/df72e9eb-9d7a-4086-9d2f-5869047158d4',
      },
      {
        name: {
          vi: 'Google Cloud Generative AI Leader',
          en: 'Google Cloud Generative AI Leader',
        },
        issuer: { vi: 'Google Cloud', en: 'Google Cloud' },
        /** Placeholder: add the public credential link when available. */
        href: '',
      },
      {
        name: {
          vi: 'AWS Certified Developer · Associate',
          en: 'AWS Certified Developer · Associate',
        },
        issuer: { vi: 'Amazon Web Services', en: 'Amazon Web Services' },
        href: 'https://www.credly.com/badges/bb23de26-0cb2-4f1a-ace7-424af8bc3c18/',
      },
    ],
  },

  craft: {
    id: 'craft',
    title: { vi: 'Hệ thống tôi xây', en: 'What I build' },
    whisper: { vi: 'What I build', en: 'Hệ thống tôi xây' },
    intro: {
      vi: 'Công việc và việc học của tôi xoay quanh bốn mảng. Mọi thứ ở đây được mô tả ở mức tổng quát: công việc cụ thể của công ty không xuất hiện trên trang này, và đó là ranh giới tôi giữ nghiêm.',
      en: 'My work and study revolve around four areas. Everything here is described in general terms: my employer’s specific work does not appear on this page, and that is a line I keep firmly.',
    },
    items: [
      {
        name: { vi: 'Pipeline dữ liệu trên cloud', en: 'Cloud data pipelines' },
        detail: {
          vi: 'Thiết kế các luồng ETL xử lý dữ liệu khối lượng lớn, từ dữ liệu thô đến những bộ dữ liệu sẵn sàng cho phân tích và báo cáo.',
          en: 'Designing ETL flows that process data at volume, from raw input to datasets ready for analytics and reporting.',
        },
      },
      {
        name: { vi: 'Dịch vụ backend', en: 'Backend services' },
        detail: {
          vi: 'Java, Spring Boot, Python và SQL. Ưu tiên sự rõ ràng: code dễ đọc, dễ kiểm thử, dễ bàn giao cho người sau.',
          en: 'Java, Spring Boot, Python, and SQL. Clarity first: code that is easy to read, easy to test, easy to hand over.',
        },
      },
      {
        name: { vi: 'Hạ tầng bằng mã', en: 'Infrastructure as code' },
        detail: {
          vi: 'Terraform cho hạ tầng lặp lại được và kiểm soát được. Tôi xem hạ tầng nghiêm túc như xem code.',
          en: 'Terraform for infrastructure that is repeatable and reviewable. I take infrastructure as seriously as code.',
        },
      },
      {
        name: { vi: 'AI, học có hệ thống', en: 'AI, studied properly' },
        detail: {
          vi: 'Machine learning và deep learning, chuẩn bị cho chương trình thạc sĩ. Học theo giáo trình, có ghi chép, có kiểm tra lại.',
          en: 'Machine learning and deep learning, in preparation for graduate school. Studied from a syllabus, with notes, with review.',
        },
      },
    ],
    links: [
      {
        href: 'https://github.com/hungngdoan',
        label: { vi: 'GitHub', en: 'GitHub' },
      },
      {
        href: 'https://hungngdoan.github.io/MSAI-2026-Prep/',
        label: { vi: 'Nhật ký ôn luyện MSAI', en: 'MSAI preparation log' },
      },
    ],
  },

  principles: {
    id: 'principles',
    title: { vi: 'Cách tôi sống', en: 'What I live by' },
    whisper: { vi: 'What I live by', en: 'Cách tôi sống' },
    items: [
      {
        statement: { vi: 'Nói ít hơn làm.', en: 'Say less than you do.' },
        detail: {
          vi: 'Tôi không hứa nhanh. Nhưng đã hứa thì làm, và thường làm nhiều hơn đã nói.',
          en: 'I am slow to promise. But what I promise, I deliver, and usually more than I said.',
        },
      },
      {
        statement: { vi: 'Học là việc cả đời.', en: 'Learning is lifelong.' },
        detail: {
          vi: 'Bằng cấp là cột mốc, không phải đích. Tôi học mỗi ngày, và học có kế hoạch.',
          en: 'Degrees are milestones, not destinations. I study every day, and I study with a plan.',
        },
      },
      {
        statement: { vi: 'Bền hơn nhanh.', en: 'Steady beats fast.' },
        detail: {
          vi: 'Cái gì dựng vội thì đổ vội. Công việc, sức khoẻ, hay lòng tin của người khác đều như vậy.',
          en: 'What is built in a hurry falls in a hurry. That is true of work, of health, and of other people’s trust.',
        },
      },
      {
        statement: { vi: 'Gia đình là gốc.', en: 'Family is the root.' },
        detail: {
          vi: 'Tôi làm việc nghiêm túc vì muốn những người mình thương được sống yên tâm.',
          en: 'I take my work seriously because I want the people I love to live with peace of mind.',
        },
      },
    ],
  },

  offClock: {
    id: 'off-clock',
    title: { vi: 'Ngoài công việc', en: 'Off the clock' },
    whisper: { vi: 'Off the clock', en: 'Ngoài công việc' },
    intro: {
      vi: 'Phần lớn thời gian rảnh của tôi khá yên tĩnh.',
      en: 'Most of my free time is quiet.',
    },
    items: [
      {
        name: { vi: 'Viết', en: 'Writing' },
        detail: {
          vi: 'Tôi giữ một trang viết riêng ngoài giờ làm việc: ghi chép, suy nghĩ, và những bài không liên quan gì đến code.',
          en: 'I keep a personal journal outside working hours: notes, reflections, and writing that has nothing to do with code.',
        },
        link: {
          href: 'https://hungngdoan.github.io/hung-blog/',
          label: { vi: 'Hưng’s Journal', en: 'Hưng’s Journal' },
        },
      },
      {
        name: { vi: 'Đọc', en: 'Reading' },
        detail: {
          vi: '[Vài cuốn sách gần đây hoặc chủ đề đang đọc, ví dụ: tên sách, tác giả.]',
          en: '[A few recent books or current reading themes, e.g. title, author.]',
        },
      },
      {
        name: { vi: 'Cá cảnh', en: 'The aquarium' },
        detail: {
          vi: 'Tôi nuôi cá cảnh nhiệt đới. Một hồ cá khoẻ mạnh không cần nhiều thứ, chỉ cần sự đều đặn. Tôi thấy điều đó đúng với nhiều chuyện khác.',
          en: 'I keep tropical fish. A healthy tank does not need much, just consistency. I find that is true of most things.',
        },
      },
    ],
  },

  footer: {
    note: {
      vi: 'Trang này là một trang tĩnh: không quảng cáo, không thu thập dữ liệu người xem.',
      en: 'This is a static page: no ads, no visitor tracking.',
    },
    contactLabel: { vi: 'Liên hệ', en: 'Contact' },
    switchLabel: { vi: 'Read this page in English', en: 'Đọc trang này bằng tiếng Việt' },
    rights: {
      vi: 'Nội dung thuộc về Hung Doan.',
      en: 'All content belongs to Hung Doan.',
    },
  },
} as const;

/** Pick one language out of a bilingual pair. */
export function t(pair: Bi, locale: Locale): string {
  return pair[locale];
}

/** The other locale, for language-switch links and hreflang tags. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'vi' ? 'en' : 'vi';
}
