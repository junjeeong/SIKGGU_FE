import { useNavigate } from "react-router-dom";

// 아이콘이나 이미지가 없으므로 이모지로 대체했습니다.
// 실제 프로젝트에서는 assets 폴더의 이미지나 Lucide-react 같은 아이콘 라이브러리를 사용하세요.

const HomePage = () => {
  const navigate = useNavigate();

  // 가상의 데이터: 실제로는 /api/v1/products API에서 받아올 데이터입니다.
  const mockProducts = [
    {
      id: 1,
      name: "살짝 못난이 버섯 모듬",
      storeName: "행복청과",
      originalPrice: 2000,
      salePrice: 700,
      discountRate: 65,
      deadline: "19:00",
      distance: "300m",
      status: "AVAILABLE",
      image: "🍄",
    },
    {
      id: 2,
      name: "오늘 삶은 족발 (재고 1개)",
      storeName: "장충동 왕족발",
      originalPrice: 30000,
      salePrice: 15000,
      discountRate: 50,
      deadline: "22:00",
      distance: "500m",
      status: "AVAILABLE",
      image: "🍖",
    },
    {
      id: 3,
      name: "싱싱한 애호박 (B급)",
      storeName: "우리동네 마트",
      originalPrice: 3000,
      salePrice: 900,
      discountRate: 70,
      deadline: "20:30",
      distance: "150m",
      status: "SOLD_OUT", // 품절 상태 예시
      image: "🥒",
    },
  ];

  return (
    <div className="flex justify-center w-screen">
      <main className="flex flex-col items-center max-w-[600px] mx-auto">
        {/* 1. 히어로 섹션: 핵심 가치 제안 및 Pain Point 해결 강조 */}
        {/* [cite: 4] "식재료를 구출하라!" 슬로건 활용 */}
        {/*  "애호박 하나에 3천 원"이라는 자취생의 고민을 직접적으로 타격 */}
        <section className="flex flex-col items-center w-full px-4 py-20 text-center bg-sikggu-primary-50">
          <span className="px-3 py-1 mb-4 text-sm font-bold rounded-full bg-sikggu-primary-100 text-sikggu-primary">
            우리 동네 마감 할인 플랫폼 <b>SIKGGU</b> 🥦🥕
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            애호박 하나 3천원, <br className="md:hidden" />
            <span className="text-red-500">부담스러우셨죠?</span>
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-600 md:text-xl">
            매일 버려지는 멀쩡한 식재료를 구출하고, <br />
            최대 80% 할인된 가격으로 장바구니 물가를 낮추세요.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/sign-in")}
              className="px-8 py-4 text-lg font-bold text-white transition transform shadow-lg bg-sikggu-primary hover:bg-sikggu-primary-700 rounded-xl hover:-translate-y-1"
            >
              내 주변 마감세일 보기
            </button>
          </div>
        </section>

        {/* 2. 특징 섹션: 서비스 이용 방법 (UX Flow 반영) */}
        {/* [cite: 30, 31] 위치 기반 알림, 선착순 예약, 방문 포장 강조 */}
        <section className="w-full max-w-6xl px-4 py-16">
          <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl">
            SIKGGU는 이렇게 이용해요
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div className="mb-4 text-5xl">🔔</div>
              <h3 className="mb-2 text-xl font-bold">실시간 타임세일 알림</h3>
              <p className="text-gray-500">
                내 주변 마트에서 마감 임박 상품이 등록되면
                <br />
                가장 먼저 알려드려요.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div className="mb-4 text-5xl">⚡️</div>
              <h3 className="mb-2 text-xl font-bold">선착순 줍줍 예약</h3>
              <p className="text-gray-500">
                고민하는 순간 품절! <br />
                미리 결제할 필요 없이 앱으로 찜하세요.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
              <div className="mb-4 text-5xl">🏃</div>
              <h3 className="mb-2 text-xl font-bold">퇴근길 방문 포장</h3>
              <p className="text-gray-500">
                배달비 0원! 퇴근하는 길에 들러서
                <br />
                식재료를 구출해 가세요.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 상품 미리보기 섹션: '지금' 구할 수 있는 상품들 */}
        {/* [cite: 34] '내 근처 마트'의 상품을 보여주는 컨셉 */}
        <section className="w-full px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                지금 구출을 기다리는 식재료 🔥
              </h2>
              <button
                onClick={() => navigate("/sign-in")}
                className="font-semibold text-sikggu-primary hover:underline"
              >
                전체보기 &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative overflow-hidden transition bg-white shadow-md rounded-xl hover:shadow-xl"
                >
                  {/* 품절 오버레이 */}
                  {product.status === "SOLD_OUT" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                      <span className="px-4 py-2 text-2xl font-bold text-white border-2 border-white rounded">
                        구출 완료
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-center h-48 text-6xl bg-gray-200">
                    {product.image}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {product.storeName} · {product.distance}
                      </span>
                      <span className="text-red-500 text-xs font-bold border border-red-500 px-2 py-0.5 rounded-full">
                        {product.deadline} 마감
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-end gap-2">
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-xl font-bold text-red-500">
                        {product.discountRate}%
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {product.salePrice.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 소셜 프루프 / 미션 섹션 */}
        {/* [cite: 22] 동네 마트 살리기, 환경 보호 가치 강조 */}
        <section className="w-full px-4 py-20 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            우리가 함께 지킨 지구와 골목상권
          </h2>
          <p className="mb-8 text-gray-600">
            SIKGGU를 통해 지금까지{" "}
            <span className="font-bold text-green-600">1,240kg</span>의 식재료가
            버려지지 않고,
            <br />
            <span className="font-bold text-sikggu-primary">350곳</span>의 동네
            사장님이 웃음을 되찾았어요.
          </p>
          <div className="flex items-center justify-center w-full h-40 max-w-4xl mx-auto text-gray-400 bg-gray-100 rounded-2xl">
            [그래프나 인포그래픽이 들어갈 자리]
          </div>
        </section>

        {/* 5. 하단 CTA */}
        <section className="w-full px-4 py-16 text-center text-white bg-sikggu-primary">
          <h2 className="mb-6 text-3xl font-bold">
            오늘 저녁, 알뜰하게 챙겨볼까요?
          </h2>
          <button
            onClick={() => navigate("/sign-in")}
            className="px-10 py-4 text-lg font-bold transition bg-white shadow-lg text-sikggu-primary rounded-xl hover:bg-gray-100"
          >
            3초 만에 시작하기
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
