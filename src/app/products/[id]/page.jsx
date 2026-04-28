import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import {
  FaStar,
  FaCartPlus,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="text-2xl font-bold text-error">
          প্রোডাক্ট পাওয়া যায়নি!
        </div>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="container mx-auto p-4 md:p-8">
        {/* Top Section: Image and Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left: Product Image */}
          <div className="flex justify-center items-center bg-base-200/50 rounded-3xl p-6 md:p-10 shadow-inner border border-base-300">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl object-contain max-h-[300px] md:max-h-[450px] w-auto transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Right: Product Info & Buy Action */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                {product.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-primary/90">
                {product.bangla}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <div className="flex items-center text-warning px-2 py-1 bg-warning/10 rounded-lg">
                <FaStar className="mr-1" />
                <span className="font-bold">{product.ratings}</span>
              </div>
              <span className="opacity-30">|</span>
              <span className="opacity-70">{product.reviews} Reviews</span>
              <span className="opacity-30">|</span>
              <span className="font-medium text-success px-2 py-1 bg-success/10 rounded-lg">
                {product.sold} Sold
              </span>
            </div>

            <div className="divider opacity-50"></div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-primary">
                  ৳{discountedPrice}
                </span>
                {product.discount > 0 && (
                  <span className="text-xl opacity-50 line-through decoration-error">
                    ৳{product.price}
                  </span>
                )}
              </div>
              {product.discount > 0 && (
                <div className="badge badge-error badge-md font-bold animate-pulse text-white">
                  -{product.discount}% ছাড়
                </div>
              )}
            </div>

            {/* Product Key Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.info?.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm opacity-80 italic"
                >
                  <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="btn btn-primary btn-lg flex-1 shadow-xl hover:shadow-primary/20 gap-2">
                <FaCartPlus className="text-xl" /> Add to Cart
              </button>
              <button className="btn btn-outline btn-primary btn-lg px-10 border-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Description & QnA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <section className="bg-base-200/30 p-6 md:p-8 rounded-3xl border border-base-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                পণ্য বিবরণ
              </h3>
              <div className="text-base-content/80 leading-loose whitespace-pre-line text-lg font-medium">
                {product.description}
              </div>
            </section>

            {/* QnA */}
            {product.qna?.length > 0 && (
              <section className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-secondary rounded-full"></span>
                  প্রশ্ন ও উত্তর
                </h3>
                <div className="space-y-3">
                  {product.qna.map((item, index) => (
                    <div
                      key={index}
                      className="collapse collapse-plus bg-base-200 border border-base-300"
                    >
                      <input
                        type="radio"
                        name="product-qna-accordion"
                        defaultChecked={index === 0}
                      />
                      <div className="collapse-title text-lg font-semibold flex items-center gap-3">
                        <FaQuestionCircle className="text-secondary opacity-70" />
                        {item.question}
                      </div>
                      <div className="collapse-content bg-base-100/50">
                        <p className="pt-4 opacity-90 leading-relaxed border-t border-base-300/50">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <div className="card bg-info/10 border border-info/20 shadow-sm sticky top-24">
              <div className="card-body p-6">
                <h4 className="font-bold text-info flex items-center gap-2 text-lg">
                  🚚 ডেলিভারি তথ্য
                </h4>
                <div className="divider my-1 opacity-20"></div>
                <ul className="text-sm space-y-3 opacity-90">
                  <li className="flex gap-2">
                    <span>•</span> ৩-৫ কার্যদিবসের মধ্যে ডেলিভারি।
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> ক্যাশ অন ডেলিভারি সহজলভ্য।
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> ৭ দিনের রিটার্ন পলিসি।
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
