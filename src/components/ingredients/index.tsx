/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function IngredientsSection() {
  return (
    <section className="ingredients-section">
      {/* Title Card */}
      <div className="ingredients-row">
        <div className="ingredients-title-card">
          <h4>INGREDIENTS</h4>
          <h2>Better Ingredients</h2>
          <p>
            {`Only the best when you choose products offered on our platform - high-quality
            ingredients for high quality products!`}
          </p>
        </div>
        {ingredients?.slice(0, 2).map(renderIngredientCard)}
      </div>
      <div className="ingredients-row">
        {ingredients.slice(2, 5).map(renderIngredientCard)}
        <Image
          className="ingredents-bg"
          src="https://s3-alpha-sig.figma.com/img/481a/5bc5/e968343e02ead9caa7924ddcbe67f484?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECT-2d9o0xeGiuLrTDP4Fg~-xmLM-PiDajAUBDLFOjYJ8Qv044KHcVrxhTlhuwqUYIYGSPQmm4Puneu~q83SEBfE3Czjc7EBul7b-BBqCGYku65mBag2jFzlMP36oOYDIGtr0pDKRBUsa4ngDR1v1VYoHK2p6wX-7UCCSnxl6vnz9E6riAjjeSriGsb0-lUdIB7O3ytnwYoiMZblkScOxGofXem8q9zG3jkNyiZpP-6YSGTRqLLbRcZL2hbwdHT0Z8i6bOP17MyahNJXzb2z630WVR7V9L8V6PGwhaHWq7DQGcMGS3GaR1QNB04O9DEL-E-ovXu1-m4aegNQI2xZCQ__"
          alt="Ingredient Image"
          width={115}
          height={226}
        />
      </div>
    </section>
  );
}

const renderIngredientCard = (item: any) => (
  <div key={item?.id} className="ingredients-card">
    <Image src={item?.image} alt={item?.title || "Ingredient Image"} width={410} height={226} />
    <h3>{item?.title}</h3>
    <p>{item?.description}</p>
    <a href="#" className="see-more-link">
      SEE MORE
    </a>
  </div>
);

const ingredients = [
  {
    id: 1,
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    image:
      "https://s3-alpha-sig.figma.com/img/833b/e5c7/5bb09cfba11a58d6ed328fdfb1d06a40?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8Nvtd0osL33ibtoE2X2cWI8FRlAzMgnek80s0SDVif1Bc8rJ50kR66R9EW4BI7t0V1dKXT6W13H1hsk58cXp67HvockUIyriNus9aRWNAz1CNIJJWcYP1eGYFq0Spq4Q66pyY84VdCee9h-MUf4gt9N-Od1b22bp06ENWCiQ9EmvhWBZDanEmEN4Wzlx7kkTthtb8yULamDQsrgP7zkKXCIWxtl2m1eZdE~YkTcbSK2Cs3QNh8doVxb0pvbniXNv6Xxp~T5P-I8FptiPZG9dDTi9waDc-GZkkjWLb5LxOp5PS3GlwKQyhZpKt6RbY6TPbidc4Tl7I5kODcU8LFvMg__",
  },
  {
    id: 2,
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image:
      "https://s3-alpha-sig.figma.com/img/b67d/ea77/c211f1eeb242f8ddce11f7afa3e49063?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScF4Ziv6eQ3XbJ6FuJC24N~u4miCQD7FkCuokP4s0FCDjYV3Y1zdxtL7YY9r3E5T-3Sp89xmVXPtEC25YZ5glyrqbBjHs9fw3-aiU6283KoFAJaoylEN5jKnAQuBvmg2v2c4Jf9nEd5R2bftDhzxQ5yentQGfmYd1C-jIURPIqRAXs18APJG2I3r0Zr0lHkR953nmLmY237vr6rwr~SZRiWNsyelM7VfP9gtyyzGmIvyzb56oVomf~AnaiCM9X55sgj~M8zlNYs-q81ehHxjOTLOD4J1~byPi99wckjmXdrNdlqqvdGFomgPmugbBRaW6rxHlhEDXrSNEXxeo7QX6A__",
  },
  {
    id: 3,
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image:
      "https://s3-alpha-sig.figma.com/img/83aa/9334/94616bd5d5a4bedd72a970d56dfe6b3d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y8d5rMm5beEA-tv0qa0yE8UC0lnn6YFbv0GqfHi4HsSN8U6qlQM4WE~oL7YQ61DGpk2jiTzORoTbFCTq4ie5T402CGI-qvV9VpaBoz39sr5OcgPU0VXhMWq63pbuO7BwhHeIcu4wIjZUenqQDvyfumN9tztS1JYt-jMQrwktI1wREOS2vNj8d-YIn1GsSpgteQ99ObyhYfCRfnaY4EPj20l8tRaAHpC5SIodmzPVnd7XKOMGLxtBMEbby5R7q5Addrj070lkroOATKzhCXrlY5J6F0t0769TLPNiZgjlHQVpqLcEiYt0C4~B6noOrm12SVJmnpN01SdJP5PYog23eQ__",
  },
  {
    id: 4,
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    image:
      "https://s3-alpha-sig.figma.com/img/bb9b/f61c/acecf67b63c3bb4c36ba72caf74dc92d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5bU9s1uvQ5nZU-myaAyeNTmhXwvk7RovzGA6bxajjcWqnOP7yZvdQ-oqhH52k3eo7wcRxWjRgd~xiL9MbouoqV7n3h9BbzIL8GOlTB5oOL8nQgR11Wx9U-b7lIcQjT8hBo-WuvZDVN~0-2bqCYYqOBcR3cxwIB5RWalPBKy69nQ8AqqqvD4wTNj~LK-nuVdGAWPoc9pV1s~u1eBiQtUcy2D2rDSLHsJZO0H7pfctY-1H-9BJwTDA7BWF9IjO0hp-5Hme7FMmxc0n5m4WrQNtHxo3zTbnTOs~AWdXS4p8a0W5v5vdKaM0ocsdKNnMaO1TfiEO5DB74vZlsOcTCU2sw__",
  },
  {
    id: 5,
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image:
      "https://s3-alpha-sig.figma.com/img/9f1f/4b6a/35f9c69109d60d6aacc825461a966f41?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvFXJJPWCC4DkzvnUV7J82T83HmwHzmD6DN~nfkQ9sRCdCAaD8TrCUgRxB3-CnZ2mQrU3hScBwEt5wF1SyX~uYUS64xyKN0akacB6jCIAGYqlbP2e45fg7gVQxH-4zTXUtY01WfKsy0Dqaoj1-XdPE9CATWTODrUxW1J~jOVkNk2b2FcXBmFq-Pt9ZXgY0sfYMlKkO2hPG0h5LWDQuiCAHAEKRBpzsE0fU92xM-jp6uG0hI6MvGe8n-lYAtnOk1Z76gh8qUJQIogCzndBlsV0RgoOfbHvyy4fI6yC4gLO~ojCarO2WzQNK8TMfb0vsbrDM~5m2Sg-hDQD5f27Wutww__",
  },
];
