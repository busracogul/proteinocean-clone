interface ProductCommentProps {
  productStar: string;
  name: string;
  title: string;
  description: string;
  date: string;
}

function ProductComment({
  productStar,
  name,
  title,
  description,
  date,
}: ProductCommentProps) {
  return (
    <>
      <div className="container bg-[#F7F7F7] p-10 rounded-[30px]  w-[1180px] h-[164px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">{productStar}</span>
            <span className="font-bold">{name}</span>
          </div>
          <span className="text-[#333333] text-base font-bold">{date}</span>
        </div>
        <h2 className="text-lg text-[#111111] font-bold mt-2">{title}</h2>
        <p className="text-[#333333] mt-2 text-base">{description}</p>
      </div>
    </>
  );
}

export default ProductComment;
