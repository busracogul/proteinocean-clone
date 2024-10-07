import ProductComment from "@/components/Card/ProductComment";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RatingBars from "./RatingBar";

const comments = [
  {
    productStar: "★★★★★",
    name: "EREN U.",
    title: "Her zamanki kalite. Teşekkürler",
    description: "Her zamanki kalite. Teşekkürler",
    date: "06/05/24",
  },
  {
    productStar: "★★★★☆",
    name: "AYŞE Y.",
    title: "Güzel ürün",
    description: "Gerçekten beğendim, tavsiye ederim.",
    date: "07/15/24",
  },
  {
    productStar: "★★★☆☆",
    name: "MEHMET K.",
    title: "Fena değil",
    description: "Ürün idare eder, beklentilerimi tam karşılamadı.",
    date: "08/01/24",
  },
  {
    productStar: "★★★★★",
    name: "EREN U.",
    title: "Her zamanki kalite. Teşekkürler",
    description: "Her zamanki kalite. Teşekkürler",
    date: "06/05/24",
  },
  {
    productStar: "★★★★☆",
    name: "AYŞE Y.",
    title: "Güzel ürün",
    description: "Gerçekten beğendim, tavsiye ederim.",
    date: "07/15/24",
  },
  {
    productStar: "★★★☆☆",
    name: "MEHMET K.",
    title: "Fena değil",
    description: "Ürün idare eder, beklentilerimi tam karşılamadı.",
    date: "08/01/24",
  },
];

const ratings = [
  { value: 9284 },
  { value: 1316 },
  { value: 226 },
  { value: 32 },
  { value: 11 },
];

function ProductCommentSection() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row md:grid-cols-2 justify-between pt-10">
          <div className="text-center">
            <h2 className="font-normal text-4xl">4.8</h2>
            <p className="text-yellow-500 mr-2 my-2">★★★★★</p>
            <p className="font-normal text-lg">10869 Yorum</p>
            <Button className="bg-gradient-to-r from-[#387EC7] to-[#1F23AA] text-white rounded-[25px] mt-6 px-8">
              Yorum (10869)
            </Button>
          </div>
          <div className="mt-6 md:mt-0">
            <RatingBars ratings={ratings} />
          </div>
        </div>
        <div className="mt-10 space-y-4 mb-10">
          {comments.map((comment, index) => (
            <ProductComment
              key={index}
              productStar={comment.productStar}
              name={comment.name}
              title={comment.title}
              description={comment.description}
              date={comment.date}
            />
          ))}
        </div>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem></PaginationItem>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default ProductCommentSection;
