interface FooterMenu {
  title?: string;
  logo?: string;
  links: { name: string; url: string }[];
}

const menuLinks: FooterMenu[] = [
  {
    logo: "/src/assets/HomePage/image/LOGO_Beyaz.svg",
    links: [
      { name: "İletişim", url: "/iletisim" },
      { name: "Hakkımızda", url: "/iletisim" },
      { name: "Sıkça Sorulan Sorular", url: "/iletisim" },
      { name: "KVKK", url: "/iletisim" },
      { name: "Çalışma İlkelerimiz", url: "/iletisim" },
      { name: "Satış Sözleşmesi", url: "/iletisim" },
      { name: "Garanti ve İade Koşulları", url: "/iletisim" },
      { name: "Gerçek Müşteri Yorumları", url: "/iletisim" },
      { name: "Blog", url: "/iletisim" },
    ],
  },

  {
    title: "Kategoriler",
    links: [
      { name: "İletişim", url: "/iletisim" },
      { name: "Hakkımızda", url: "/iletisim" },
      { name: "Sıkça Sorulan Sorular", url: "/iletisim" },
      { name: "KVKK", url: "/iletisim" },
      { name: "Çalışma İlkelerimiz", url: "/iletisim" },
      { name: "Satış Sözleşmesi", url: "/iletisim" },
      { name: "Garanti ve İade Koşulları", url: "/iletisim" },
      { name: "Gerçek Müşteri Yorumları", url: "/iletisim" },
      { name: "Blog", url: "/iletisim" },
    ],
  },

  {
    title: "Popüler Ürünler",
    links: [
      { name: "İletişim", url: "/iletisim" },
      { name: "Hakkımızda", url: "/iletisim" },
      { name: "Sıkça Sorulan Sorular", url: "/iletisim" },
      { name: "KVKK", url: "/iletisim" },
      { name: "Çalışma İlkelerimiz", url: "/iletisim" },
      { name: "Satış Sözleşmesi", url: "/iletisim" },
      { name: "Garanti ve İade Koşulları", url: "/iletisim" },
      { name: "Gerçek Müşteri Yorumları", url: "/iletisim" },
      { name: "Blog", url: "/iletisim" },
    ],
  },
];

function FooterMenu() {
  return (
    <>
      <div className="container text-base-gray ">
        <div className="grid grid-cols-3 gap-52">
          {menuLinks.map((link, index) => (
            <div key={index}>
              {link.logo && <img src={link.logo} alt="Logo" className="mb-2" />}
              <h3 className="text-bold text-3xl text-white">{link.title}</h3>
              <ul>
                {link.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-normal leading-5 pt-2">
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-xs pt-24 pb-10">
          Copyright © - Tüm Hakları Saklıdır.
        </div>
      </div>
    </>
  );
}

export default FooterMenu;
