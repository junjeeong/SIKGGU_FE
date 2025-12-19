import { useEffect, useState } from "react";
import { BiChevronRight, BiMapPin } from "react-icons/bi";
import { BsPercent } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % liveProducts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center w-screen min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="w-full max-w-[600px] bg-white shadow-2xl overflow-hidden flex flex-col relative">
        <Link to="/">
          <header className="sticky top-0 left-0 flex items-center justify-between w-full bg-white h-14">
            <img src="/icons/logo.png" alt="식구" width={120} className="p-4" />
          </header>
        </Link>
        <div className="py-8 text-center">
          <h3 className="text-xl font-bold leading-snug text-slate-800">
            우리 동네 마트{" "}
            <span className="text-orange-500 underline underline-offset-4">
              마감 세일
            </span>
            <br />
            놓치기엔 너무 아까운{" "}
            <span className="text-sikggu-primary">신선함</span>
          </h3>
        </div>

        {/* 1. 스토리텔링 히어로 섹션 */}
        <section className="px-6 pb-16 space-y-16">
          <div className="space-y-4">
            <div className="overflow-hidden shadow-lg rounded-3xl aspect-video bg-slate-200">
              <img
                src="/images/home1.png"
                alt="재고 처리에 고심하는 마트 사장님"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-2">
              <h2 className="text-2xl font-bold leading-tight text-slate-900">
                "버리기엔 너무 아까운데..."
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                매일 밤, 멀쩡한 식재료들이 유통기한만으로 쓰레기통으로 향합니다.
                <span className="block mt-1 text-sm text-slate-400">
                  사장님들의 한숨은 깊어만 갑니다.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden shadow-lg rounded-3xl aspect-video bg-slate-200">
              <img
                src="/images/home2.png"
                alt="라면으로 끼니를 해결하는 자취생"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-2 text-right">
              <h2 className="text-2xl font-bold leading-tight text-slate-900">
                "애호박 하나가 3천 원?"
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                건강한 요리를 하고 싶지만, 높은 식재료비에 오늘도 라면입니다.
                <span className="block mt-1 text-sm text-slate-400">
                  물가 부담은 너무나 큽니다.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 2. 해결책 제안 섹션 */}
        <section className="px-10 py-16 text-center bg-gradient-to-br from-emerald-50 to-sikggu-primary-50">
          <div>
            <div className="flex justify-center w-full">
              <img
                src="/images/logo_mini.png"
                alt="logo"
                width={600}
                height={100}
                className="opacity-80"
              />
            </div>
            <h1 className="text-3xl font-black leading-snug text-slate-900">
              버려지는 아까움과 치솟는 부담,
              <br />
              <span className="mt-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sikggu-primary">
                식구
              </span>
              가 해결합니다.
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-relaxed text-slate-700">
              서로가 서로를 필요로 하는 순간을
              <br />
              <b className="font-extrabold text-emerald-600">
                위치 기반 마감 할인 서비스
              </b>
              로 빠르게 연결합니다.
            </p>
            <button
              onClick={() => navigate("/sign-up")}
              className="w-full py-5 mt-10 text-lg font-bold text-white transition-all shadow-2xl bg-gradient-to-r from-emerald-500 to-sikggu-primary rounded-2xl hover:shadow-emerald-300 active:scale-95"
            >
              식구 가입하고 식자재 구출하기
              <BiChevronRight className="inline-block w-5 h-5 ml-1" />
            </button>
          </div>
        </section>

        {/* 3. 라이브 캐러셀 */}
        <section className="py-12 bg-white">
          <div className="flex items-center justify-between px-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
              </span>
              <h2 className="text-xl font-black text-slate-900">
                LIVE 구출 대기 중
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-400">
              실시간 업데이트
            </span>
          </div>

          <div className="relative px-6 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / 1.3)}%)`,
              }}
            >
              {liveProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 overflow-hidden transition-all bg-white border shadow-md cursor-pointer w-80 rounded-2xl border-slate-100 hover:shadow-xl hover:scale-105"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      className="object-cover w-full h-full"
                      alt={product.name}
                    />
                    <div className="absolute flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-red-500 rounded-lg shadow-lg top-3 left-3">
                      <BsPercent className="w-3 h-3" />
                      {product.discountRate}% 할인
                    </div>
                    <div className="absolute flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white rounded-lg shadow-lg bottom-3 right-3 text-slate-700">
                      <CgLock className="w-3 h-3" />
                      {product.deadline} 마감
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <BiMapPin className="w-3 h-3" />
                      <span className="font-medium">{product.storeName}</span>
                      <span className="text-slate-300">·</span>
                      <span>{product.distance}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-sm line-through text-slate-400">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-2xl font-black text-emerald-600">
                        {product.salePrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className="mt-3 text-xs font-medium text-slate-500">
                      재고{" "}
                      <span className="font-bold text-emerald-600">
                        {product.stock}개
                      </span>{" "}
                      남음
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 캐러셀 인디케이터 */}
          <div className="flex justify-center gap-2 mt-6">
            {liveProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx
                    ? "w-8 bg-emerald-500"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </section>

        {/* 4. 서비스 혜택 */}
        <section className="px-6 py-12 bg-slate-50">
          <h2 className="mb-10 text-3xl font-bold text-center text-slate-900">
            <span className="font-bold text-sikggu-primary-500">SIKGGU</span>는
            이런 가치를 만들어요
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 transition-all bg-white shadow-sm rounded-3xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-2xl bg-emerald-50">
                🌱
              </div>
              <h4 className="font-bold text-slate-900">환경 보호</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                버려지는 음식물 쓰레기를 줄여 탄소 배출을 예방합니다
              </p>
            </div>
            <div className="p-6 transition-all bg-white shadow-sm rounded-3xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-2xl bg-amber-50">
                🤝
              </div>
              <h4 className="font-bold text-slate-900">상생 경제</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                우리 동네 마트의 재고 소진을 돕고 수익을 창출합니다
              </p>
            </div>
            <div className="p-6 transition-all bg-white shadow-sm rounded-3xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-2xl bg-orange-50">
                🍱
              </div>
              <h4 className="font-bold text-slate-900">건강한 식탁</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                저렴한 가격으로 신선한 요리 재료를 얻을 수 있습니다
              </p>
            </div>
            <div className="p-6 transition-all bg-white shadow-sm rounded-3xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl rounded-2xl bg-blue-50">
                🏃
              </div>
              <h4 className="font-bold text-slate-900">퇴근길 줍줍</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                복잡한 배달 없이 퇴근길에 슥- 들러서 가져가세요
              </p>
            </div>
          </div>
        </section>

        {/* 5. 최종 CTA */}
        <section className="px-6 pt-24 pb-12 text-center bg-gradient-to-b from-white to-slate-50">
          <h2 className="text-3xl font-black leading-tight text-slate-900">
            오늘 저녁 메뉴는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sikggu-primary">
              구출한 식재료
            </span>
            로 만들어보실래요?
          </h2>
          <p className="max-w-sm mx-auto mt-4 text-sm text-slate-600">
            지금 가입하고 내 주변 마감 할인 식재료를 확인하세요
          </p>
          <button
            onClick={() => navigate("/stores")}
            className="w-full py-5 mt-10 text-lg font-bold text-white transition-all shadow-2xl bg-gradient-to-r from-emerald-500 to-sikggu-primary rounded-2xl hover:shadow-emerald-300 active:scale-95"
          >
            내 주변 마트 둘러보기
            <BiChevronRight className="inline-block w-5 h-5 ml-1" />
          </button>
          <div className="pt-3 mt-12 border-t border-slate-100">
            <p className="text-xs leading-relaxed text-slate-400">
              © 2025 SIKGGU. 식재료를 구출하라!
              <br />
              당신의 현명한 소비가 지구를 살립니다
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

const liveProducts = [
  {
    id: 1,
    name: "못난이 양송이버섯 500g",
    storeName: "신촌청과마트",
    originalPrice: 3000,
    salePrice: 1200,
    discountRate: 60,
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=600",
    distance: "250m",
    stock: 3,
    deadline: "19:30",
  },
  {
    id: 2,
    name: "한우 국거리 300g (당일 마감)",
    storeName: "동네정육점",
    originalPrice: 26500,
    salePrice: 14500,
    discountRate: 45,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600",
    distance: "420m",
    stock: 2,
    deadline: "20:00",
  },
  {
    id: 3,
    name: "유기농 애호박 2개 (흠집)",
    storeName: "우리마트",
    originalPrice: 3200,
    salePrice: 950,
    discountRate: 70,
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=600",
    distance: "120m",
    stock: 5,
    deadline: "19:00",
  },
  {
    id: 4,
    name: "손질된 대파 1단 (당일 입고)",
    storeName: "연남청과",
    originalPrice: 2500,
    salePrice: 1000,
    discountRate: 60,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUXGBsYGRcXFRUYGhcaFxgYFxgYGBoaHSggGBolHRoaITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHSUtLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLSstLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABKEAABAwEEBgYGCAMGBAcAAAABAAIRAwQSITEFBkFRYZETInGBobEHMpLB0fAUI0JSYnKy4SQzgmNzk6LC8RU0s9I1Q0RTg6PD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQMEAQMEAwAAAAAAAAABAhEDBCExEiJBUTITYXEFFIHwI1LR/9oADAMBAAIRAxEAPwDtAKOU1SOHz7k4gDQlFKEoAnuOzhx7UHowUh+33ZoBmxOxf+Z3mQk6SdDZOXz7yi0ccHfmd+ootKVw1hnbhzUeC3krdH1Q60vIGETjylXJGI7fcVntBOca1QgSJg5AAYx4gLQkYjt9xCIS5FhJcce74I5STn88FJUUiBQBSZ96AKmIGJx+JlNUDi/8/wDpaE+VGsrpv4fbPKAgHXvCQM+5Lc3fv+BQAQCWjPHafHFKKCCkCCUCg8BAqAIBwRCYxzSjgiKkDTniY4Sjbki6PbGKI5IBxJKLGOSMoCJ0J4ewEFJuo1ILEYBG1IJOxLBVQHijlJQCkCkmcUEFAIejHdU9p/USj0q0dGZjD4iEzoV0sP5j5kJ/STSaTwJJjADhio8FvJUaDeRXqs7Mccxn88Qr4ZrPavWaKtVxjFxAx25uw3rQg4wiEuRSSWo0RUlQSkhDak03YIBZUSxkfWQP/MM9sNUqVGsZ/mZfzHbN0A9uM80A+SggQiKANESjSVICQQKJAEilGggCKRHJKcihACEglLam6hUgY+lt48ijUL6UN7faCCgk0RKaFUz87MEbMAASMPkeCHHLgoIHWpu2Wjo23jvjOM04EivRD2lrsis8ym8b6PlW35DKZ+sOMQQN8fFM1bcX4h5PecFKpaBYPWcTwGCXW0NROTDMYQ4588189+0/Us0f8kq/n/hi4y9kfRmk2MkOvYnPPn3q2oWunUkNcDhiMvArK2qzOacQePcfgrDV10ud2eZWml12rjqFgypV7orHK26YnRrmvtT3UwOjE4jJzoALh7XitCCsVoS2XLQWSAAXBxxuxOeeEwtbYa4ey+2brjInaMge8BfQI6pKiTKIlE8SIKBCkqDb3JFI4d6UUhnvwQDpUKytcQ8OOBcYiZAmc1MKj0X+tnmRygIB4lAFJcJ+eKCAMoiUCgpASJoRlCUARSSTuSiiKAKUhspxJIQCKk4QNuPYk1HRHaBzTibrnAdojyUgi/Rnb/nmgpclBATikMxMpSAVQLRSiQQBuMpN4HDaMUTig0g4qSGQbfZy7LBGx8Q3gpz2Kvd6x7fJVcVdlVFXZlbHTa60VTTaKrS4EsMRBJnPYFtLEIY0XbvVHV3cFn9VbKeiLwAC6o5wIibt4i6TGO3mtK1EathkokJQUlQJEmcN/wAwlpqYntHz4oBwlMsAvOw2jyCK017jXvIkNBd2wJWRs2ud+q1rafrvazExEkCYEzgs55Iw5IckuTYk96VK59rhrTXpGqKT4ukgGBOH7prVbWm1VrRcc7pBce8sAaJLW4CYwxjmqfuIp0U+oro6K4oLMWfW+m6oxpbca7Auc7Bvh8wr51oBAOOI+y7OdswoWpxtXF2XTvgkOQC51p/WCvRthoNqOu9U4nY8Db2ytLozWujWqCkJbUOGPAEyN4wUw1EZc7ExTldGgSGHfmnHwBMqBpPSLKDOkfllgtnJJWxwTUkpjR9sZWYKjJLTkYInnxT6lNNWAim3ieEQUspNTJSBnpvwu9lBLh34fFBATaZwGeW1G1ECjQCkJSQUaAIpsGE4UghQDNN15Z0xY6mW05i8fWBG0t2DhmrlrQ4HiPNZLWTQlprVHPbRMzAi6JGxxx+YWrsLXXG3mlroEtJBIIGIkYHtWUHJtqR6Wux6eMMcsWza3V2N6v0Cyi1hJN0vb7L3AeStQoGh7QalMvLS2XvwOcB5zU5anmhhCUSDygAHJIjFHMIr2CAiaQxpVBvY7xaVx/QtX+Jof39Pxe1dmqkQZy2rIaT0TY6NMPp0rppvY4OL3k9V7SZkwcAuPU02tzOcbaZhdZKxe+qdhqP/AFEqLqrpz6Nag4ReeOiaSCYNR7BMbSOKatYqVIFNpc4uJgbpMk7AI2pmnoro6tN9SoJvthrYdjIzJwz3DvCzXF/dmcXTtmrt+iA4umtBJJno953B3ktzoi0tfQZBktaGkxEloAmJOC59arbi7v8ANWurem6NEXatQCcYhx8guWEXHjhkwnuUOv8AULdIj8VFp9kuCRqn/wCL0y17oMuLD6supkyBPHOBmU16RbYx9roVKbg5twtJGwhxw37fJaP0aau0qj/p7nPvsmm0AtukAQSZbM4xgV146T3NscqbN7rE8iy14meifEZzdMRxXKqukahplrnEiYAnKIC6JrjpG5Z6gaSHFjoIOIMZzsXJbdUin3TzlRqZdVUZ5H4Or6m29hoMpQ5rmCMQQHbZBiDn5LQKi1a0i59noG9M02HDL1RlwUyzaUa6rUpEi804cRAPMTyIXXjlSSZv03wTw5AopzROK2Khwgm+kbvCCkE2UaSjUATUqQJx2ZCTiYnsTkpBEpTG7FAHKbJQIOwgI2NujidqbsskOJ3wO4BAQqtuax11xAOY49qTR09TLrhIJ2bZ7CsbrXYqtW1ONJ4NxgBZlEkkGdpyWcsuhLUH9YXZPrX24b8Ac1Vyl6M5SaZ2FlRh9XDPmc04WrI6NtlGy0wwkl0k7yePALSaOtIqNDmmQfnFWtFk7JKBQtFQNaXHYotktzKoJaZjNCw44pTkj4oyUJGq2IPYVmNZGTZqoG1jvIq/t9rbTY52BO4ZknIKstrA6m4ZgtPfIXFqEnJCS2s4ey1kCnietIz3ynG1evT/ALxn6gouk6NwMA2eYlHZ3TUp/mB5YrFJdN/k5Wi5rWglxG/DmVGY6ahPFIoPmoN+fISiDok/PzgtoxpL8FBzWGlFKxv++ap/zkDyC6bqTpGjZbBZ21XhpqBz/be4ie6OSwuuNgP0ewU25hsHhIDnE8yq61201HNE9VjQ1vY0Bo8lhKTSVcmzl0o6Jr3bB0TnNMtLMCDIN6owYHmudaSrQ1xOQY3PLKU9XtT+gc28bpc3DYXBwM8IjYotqqXjUZneaGe0A33pfVTr+2Lto7FqnZ7tloN3U2Dk0BY+1aaDNI1wJa9tQdjhAH/YeIauhaJpRTaNwA8Fyag76XaqrnQT9ZdIwMBtQ0zh62BAI4Ddh2ZF2JHdg+VnXrBaxUYHjbn2jA+SdqAm7wM58CsfqVpHqlhOTo8gOZnmtiHLTDPqjvyUyw6ZDkoJKC1MySjTTPjx25pxCBSS84gIwUVHEkoBdrr3WHgEjR0miwvOJEn+rEDkVSa125zWtYyL1R7WCfxGD4SrvSFsFOm5xAIaJjgAqpkGVtFpp9LWIIGOMbxhLiodu081jQGBhMZkXtiwGkNYnVmVC1vRsJymSczicN6m13dRvYPJc2qzOKqJhJirVpBvT3iJJguF58GZ44YDYujakaSbWpOusDA112A4u2B049q41a6v1w/KPMrqforE2d7t9V3g1gVsSdJstj5LzW2qW2WqQYN3A7jsVFqnpCXn8TeThEjvBnmrDX+rFkqcbo5uCx+gLQW2hpGRwI7RLTzkf1Lbg0fJ05jkbiolmqyAU5aa4aCTs+fkqW6Vl0rZjNf9LhrHAyGgQYiXTmB5bsHHYrTQVo6ay0akReptMbsMpWN1jr031ab64+pD4LfvHMg8IjvLRsK0no/tL6lhY54glzyOxzy5pG4QcO5cG8tzozRqKRzHWKz3XvbHq1HciTHmqjRr5e3gXeDSfetprjQDbTVBGZDu2WgeYKxuj24uduc/yhUg9nH0efIm2SbzjuHmf2REE9XacOeCFjd1HHe6PZH7pqvaHCCMCMe/Z4rofBn5L3WzS4e4U25MEE8cJA7IVNZKL3uZTYJe9wa0cSYE8NqYpQc9mfxPFb/0XaHvvdanDAS2n/rd7uayjCy9dTKfXbR7aHQ0W5NgE/edEud3mSqmxUL1pDfvVKY5XXHyWs9KVng0an4j5FUmrdO/bqPF88qZ/ZWkkpUaP5I7FaagpWd7zgGMLuQlcQ1Usbi5jA8AkG67vMTwJOeyV1/X193Rtp3mmWjtd1feuM6vAi1NIkNgRuhzZI5ye0LbNwdun5NHq5aiHVpwOIgZyz9wuotcHNac5g+IK5LZxcrP3ON7uMSPErqGjnfVM4ADkqaV9zRrqY9qZOl33vBBI6QILtOInB/WiDETOEdm+fgnJTYKMFVIFyltwyTDn4rK6x6yVaVZzKNQGPsmy1XBpY5jXMdUDhiQ5zgQCOoeEgaW1aLpVKjKjgS6mbzesQAezan7ZZW1WOY+brgQYJGB4hZLSWtFRteKVYOp3mEg2StAYagY9vSTi8Nl3qxkpGtenqlBzhSqXXXSGUzYrRV6Srcc8MbUaQ0kgZCYg7kBR2rQGjqdSpZ22O0vuQTcqPM3hIjHh4HsK7ayxNhtSyWhsb6kYQcQQcRh/vjD+nNbqtKx1rTTY1j21TTJNJ0uIshqguaReBDyBjk0dpS9K619Z4bSFQCpZqdM9ED0wdWZTtbKbnkNLmuc1uYAJzwwo4RfKI6UN6J1a0danuP0eqwtA9ascQccmuMHHbx3LYaH0TSszOjotLWyTBcXYnPErLawabtFntRbRYwU+jkzRDPrC2WM6Qu6wgOJcGkA3Wn1sIw1wtHQ1XF1LpGXAykKL+kfJoS+8XdHBD3gCBjGKskkKRstK6KpWhnR1QS2QYDiMsslCoarWVjr7WuvDe9x9/zCoNI62WptOlUuU6Yq2h9FrQ173AMqGn9Zm1pwOIJHFNWHXG1OqtbVbSDPpHQnoqdVziCbWwYEmBeoAzGAJnIpRNGi0c/YmNZLVdYGgSXbIzjZz96b0bUkeCh6wvN6R9lmA4km6e3b2tWOodQN9Ormc31ll7oDuqD0YcT1S4Euqun8xPddWw9F+mOmbUpYAUxTDI+41gpjbn1ZP5lmdONY6KB6opdIcI67hdEe0J7EPRja+jtxp5NLXMzzM3h34HmueHBvmVou/SdZ7tVj/vMcO9pBHmVzjRbvq3njU812L0nWO9Z2PH2X+DgR5wuM2LBlUcX/AKmo41KX8HmTRMDoYwRmL3tY+SbtGDeXuThcJI3ANHdAUfST8hx8pWhkuRyjRL3Mpt9ZxjskwvQGg9HNoUGU2j1WgLlWoGhC+rRrOyLiW/lYM+9x8F2WoYB7FbGt2zohGkYv0l2WbI1/3ajf80t96zWoFkm2sO6m536Wj3raa8Nmwu/NTP8A9jVSejiz/wATWd92mxvMuJ8guaUrzpCu4uvSlUDdHvBMAuYJGeDg7Djgua6r1WdGHmB/LjtD7sf5n8lvvS9U/haYzmqMN92nUMc4XNLDYy+u2iHQGxH9LQfcea6MzOzTqy5rWe7XugyGwe4uLg32TC6NodkUWDhPMkrD0KYNoc7OWtJ4wBEcTAW8sRhjewKulXc2a6p9qRJko0m8gu44SzlCUiUkPmY+dhVSBX2gsfrhoWiKzq1Wtd6ZzSIs4e9vRNBIY++C2QwnAbStcx2Kqdb731ZbfwDpuMvmLpzGwcd8DaosFFatG0H2p9bpSHdO2uR0DDUbBom4KnSyGmWiI+25WOnDYLUJqU3F7mubTqQZYQ2LzYeBLb/jCYs9hq1zdZUr0S0O6zhF+TAyON2I5LRaN0cadNrX3ajhMvLjJJcTOXYO4KQZ+06t2S20XGmx7XuBY6uGsvPPQuokuDn7nA4Z3RirM6HrX3HpHGm6oyr0b6NJ911MMAuONTq4sDhhgTKuBS/C323fBH0f4W+274IDN636tC2ObUeXsaxjmlpY1wIJkmW1mkHYq+hVplh6O0noSKLHMfZmvaXU2MuXb9SRMB0Y4wtmaX4W+274JAsjRlTp+0ez7qAoLbqtZqwv0qb6d57nlzS1weXOvOwdUwkycIxJKfpaqWVr2VaFIUX0qhe7NxfNOoLpJccPrb0jb2q6ZQAEBjANweQPJCzjCps6xyM/YbtKAyGhq/V7QE3pit1nTOADuGABx7D5qJot/wBWDwCdtjb5eDtgd10T7ly6h3FHVpvkzEaXpGb7yQQHPE/jJIPZEnkoeigadpZVbgRWY/txIjsglWum6t+o0OwbdA7WtwlU9G2MbdvEy1r5JEkkB5G370fssYHRNWdr1ns3TWOqBibhcO1ovDyXAKAxqAbXZdrmld/1StjK9jpkG8LtwneWdQ59i4hbLN0Fsr0zsqlo/LnPsx4rXItlJHl5VQxSkklwzd8VHFA1q1OmM3HlMKfOE9vl+6f1OpmppSk2MGsLvEgeaJWzHGrkdh0ZYG0zRa0QGMIA5K4tJ6ruw+SYA+sb+U+YR6RfFN54LXhM6WVetDL1iqDgDyc0qD6O6UdO78YHJoPvVppog2Wp/dk8hKj6gD6h7t9R3hDfcuBb5k/sV8mX9N1ZxZZqbJvOqOIA2kNgDxVJoUguw/mTUfE7AwgTuxLQrj0p1v4uzD7lOo/vJa1vv5LN6u0XtpVq2Idccxk4STdx4AYBdGWR3YF2lxq5Rzxk4MB33cJHCYg7wFvaYiI7PBZPVizXbjd3WPDa3mRe7hvWtb8nu+ea00q2bK6p9yQu5wRoTwQXWcpPZgANyTGU5iTzn4oSiJVSAmvjwVfre15u3Kb3m6+Qx9w5YYxtMDZiQdilziO0JjWi0MuuaX0hIuu6Q4AmHNBAxkwD2Ss4O5MFGdHOFRoDasXyCekkNa15IMbQ676u5ylvs7xfHROOBg9IBOMgNGyY7stqYv0WVH1L9nD85moIcIv3hewxe8/1N72qbqWJL7LdLTjNXJw6hm9j1mjHgVoC50bXqNcKTqIuAu+tcWuMS4yRgc4HeFbyzOaf+H+6xx+jNe8XrKARGJeHATTIwG66DyUx1Ki/oG0zRMtuwekdejA9HBiIc/Z9obsQNKSzfT/w/wB0LzN9L/D/AHVBX0M8hxFOmXOMuLmVoJNQvMbvs8irGhoazgMmi+WgbKhxF0zxPVGPBATxd/s/8P8AdHZcqkR6xyED1G7E3Y6FKlPR03tnPqP3k7eJPNSKM9cwRLpEiDF1oy7iofAOYaAebl0/ZkeKtKlSH9tMHvvNVNY2mnVe3YYIVpbzDG1Pu4HsdHvhcd9WKzfBLuRmNY6Nxjg4dYiAdnWcCR7SqKFmL6BN0OcRvGYbaOUwwf1LVaxWPpGMdEwQSN4cQSe6BzWTfa3UQacOJmZcCBsgNIMuEgHvIxWUDtl7OmejSqG/SaOQbUvN3XajWnDhKxXpRsfRaSvbKtMPH5mgsd4BvNTvRhpV/wBOLH5VKRgREFl0tj+mdp2K29MtikWWt911Smex7Lw8WeK6o746PMz026Odvy+d4Wp9D+j79rtFaMGBtMHjmfCFlq2F0bInuiSuv+inQ/0ewMc4Q+sTWdOfXi6D2NuqMStswxIuH1P4i7/Zk/5mhJ0y76l/d+oKn0fbuk0ra2A4UaFJh4Oe57z4XVZ6dqRRdO9o5vaFefxZuxGkcbM8b2O/SUx6PR/BMP3nOPN5T1oM0iN7T4hDUdsWCz8abTzx964Mfzv7FTB+lCq0W6mXkXRRb2/zHk4ZpqqHBwpAQLjeZN5/gWD/AGQ180ea2lmTgxtKnJ39eoYTuj6hcX2hwz9UEeyOwbt5WmV+D0dOu1M0ehKUTwwJ3nAnwhXLBKgWBga1oJEme8mXFTqfzzXfij0xSOPLLqk2OXW/MIJEjiiWhmWKQ4oOKQ4qoGalaC3tHmsd6SP/AFH99R/6S0ltqwQdxHxUevpyy16xo1LG15cL5Li0g3RdBIjExguXHlipSTZFmB0v69o/NX//ABTLR9Q3+4pfqrLZ6brWVgq1XWeR1nFo6PaAHRLdsAniAm6ZsxpXvoxDbuU08GiYb6kQJJ7ytllg/ItGB0x/Pd3/AKKa2Wq387R3/wAvk1T9FNsddra5sgg4w4MMjAY9XaGjuSNIa6WOyvYBYReZNwtLBdmAbvVwnBFki3SYtHSkFzij6WaTi0fRagvODR9Yz7RjctizTUgHo8/xfsplkjHlhOy2ROyWcs2trH2s2XoiHCmKl68IIJiIiZU/S2lxRZfLJGAwdGZAnEbJUPJGuRZiNYqF003jL1T3xCmU2hzCwnBwuYcRuS9PCaJO4AoaNdeYCI7ffliufTNNNExZT2cPLOjJAeyW4jaDJ7i0h3Y1Z7TVF0uqgGaclzdowgkbocGmdxBWu09Sc0itTEubmPvNHDaR5EpNntDK0Ppi+SIcB6xEZR9rfEzuyWOSLxyPTxyWSBgdR7WW6Ss7ifWqXT/WHDzK6l6VWTYC7a2pTPNwb/qWFs+gGi20Ktnd1W16bi0xBaHtvlhG0CQWnEELe+kypGjqxwwLDiYGFRi6cTTi6PPnilHZnIrTUDIc5pc0AFzQYLm4S0HiMF1zRvpFsFakXCoKRa0k06kMcA0TDcYd3Eri9tthqNulkSBk6cBBwEyRhsUW02brHA5Zm9uG/BRjk4rcnHgaW50z0O2h1epb7U/1qtRvd6zo7g4BarXG0RQA+9VpN51GnyCqvRLYOisF851ajn7cQIYM/wAqqfS/bnto0WUyQ41L8gwQGA4zsxIWsu6LXshx3o2udPDcpurzSLLRwj6tmAEAdUbNi4HY9P6QdDfplXsaQY5BaGxa1aWa1rW1WloAug0qZhowEkDExjPeuKOFwdtllik+C+1tD3aQLAQB0bZ4AzLjxyAHbvTmjqQqPDW/y6fi/Zy/bfNY21167i+pdNRwALmtughvCePYJ7J02jrKGNDR/ud61ww65dXg6Jy6Maj5J9P7Pb/pKls2KGcLv5wOYKmtXccQqEEd8bigpA+SkuRkolRgodIVYc5Zix1f40n+z96i6f0pWfIdAa5xyEG6HSBPcq2yW4US6pmThB7ZXjSyRcm07Od5UaXTfWpPbvgcyB71ZW+ldsr4+5h2xgsnQ010uB6pmY7MQrxtvc5oDnYSDkNhkeKynqlj2aZi9VBPyXLKAo0Q0ZNaBluELlWsFfpLS4DJsD3rd2zTjyIvDvhZ60U2uJdGJxJGCvp9ZBO2mUeth6ZSNEVKJ/tWYd67JQd1R2LmFmsTHPBI9UziTgRktMzS9QYXgBxhTn1sG1SZMdbBeGM0rRd02z8VK75u/wBK22tdO9ZKo23HR2gSPFYAvpdO20F/1jcnSY2jLI5q2r62Ne0sNVkHAiB8FD1sWqUXx6NFqotcMtA/pKA23mT4BNavHqQc5OCom6TLGBrHG6BAjcrvV10gHfjzW/6fl65PY1wZlkbSLS00sFlbbZnUn9JSwObmjCcc27nA48cd8raVGYKot1llenOCkqZ1Qm4u0V+j7bQrm85oFZpDnDIlzfVc4bch1tmR3k9Z61tr0nUwKYY4iYYScDIBMuABjcqfSFg617EOGThgf3HA4JNDTFeidrgN2Hz47VxvFOHxOtZYT+RQt1YrnqwWH8st7R9lJ0jocsJBp1nuG3oixg2es1pPmtkNYrPVu9IajHAz1X1KfMAgnmeMKQ600XQQ8ndLi8H2iL3iqdUlyjTtfBB1d12NKzsoPs9Q9GA0OpgQQMpBIg9+KrNN2Q6SrB14sYwRGDrs4kuI6oPCScFb2q0U8nCm+PsuvADtBcAU0NLNa24xtCBk0GG7fshyt1zaor0QTshWbRbLvR0aZuDN5wNTicJu8Ix5KQaAbgCHvOJGQHaPHGe5INW0VMCWsbOTRh45Kz0fYw3CO0nb271eGncncis86W0Q7JZejEwXOOZG4TgBu4diu6LUw2nuT7Dj3E8RBAy3Y+K7IpJUjjk23bF14AbP32+JgeamETgolqp3mQMMWnsLXtd7lMA3qSoOjdv+eSCdQQC5RPMISgVAMNprQDnOcb203BwOPWWefqzWzLx2QV02vQBUV1ASAc8wNuET5jmueOlxR4Rn9KPo5udXagODo7k67RNY51Ct++xAlOCwDcrfQxvlB4oPwc0s2iHkElx9Zw9lzmjyT/8Awd0SCcJ2nYtpoPRgFGCZh9USdsV6iGl6badCq4CXNa50CJiSCY3Y5p9DH6H0cf8AqjDaHsVSrRY9zj1t2GRIUlugMZJPMrV6o6PH0KjvunzcrKhowNaxu5oGHAAKVhguEiViguEjF09CAfZB7cfNCroQO2e5bg2ASjFiGwBWUEuC1HPf+BvyaSM89kLY6AbEYYjq4GRh71ZfQxGIGCVZ6B6pGA2iPLgkYRi7SCilukT4TFalKlNKbe3HsnvVySjtdinYqW1aNWxqU1CrWdAYmvo7gozNFjdG/Dj4rZVbKNyj/RBlnHxUdKJtmaoaPmIGGEjMfBS6WjYccMB7/wB1eU7KBsThs45p0oWyLZbPy29ym0KUcvcnKVFSBT2xyViAMbIRtYQ/fh5nanmtCNxAInPAePz4oANf1ZAOBy25qUotQG6cThJw/wBvnBSZiEAqDuRpEH5cfigoA+gjQCAZexMVaAJGGWXCVLeEiEAzcxS3wASTAGJO4AZ47k4EZAjEAjccu9AVurzP4emb1+Q438Otee517CM5nvSdOQ2zV3lskUqgjeMcPehq/VJosAGAbTwjIOpsef1eCZ1xtFyxVztLCwYx63V5wThtyQDeqbX/AEKiGwD0ZgnHGTdJ71dtGU4nb2qu1SI+h2eP/bCsnNx8fcgChJAxhOhqQDiRGwd+aAIhExpk7oEeM+5Kfluy80GgzPDnkgDpTAEzx9+CVCIHGEqEAhwTLmqQQkOCAhPpKO6nlP4vCfgrEhNVWDx88PepBFawceWG355JT6OalhnwRFqkEZhGBCcZhmnDSww+CDWKAFRy/aEq6JmMfHelNAlG48JQCLQYY47gdnApwiY8ki6CCN4I+SnG7EAz9HO93tI07PzKCUB8be9GggoAVX4eabQQQACGxBBAVGq/qO/LR/6FNVXpI/5d3Yz9aCCAttTP+Ss/903yVtV2dyCCAWm25nu96NBAGEYzRIIBW1GgggEhJcggpAl2xN18h+YeaCCIC027aggpAaDPcgggEu+fBOVM0EFAE0sz2D3o/tIIIgLQQQUg/9k=",
    distance: "380m",
    stock: 4,
    deadline: "19:30",
  },
  {
    id: 5,
    name: "국내산 팽이버섯 2봉",
    storeName: "신촌청과마트",
    originalPrice: 4000,
    salePrice: 1800,
    discountRate: 55,
    image:
      "data:image/jpeg;base64,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",
    distance: "250m",
    stock: 6,
    deadline: "20:00",
  },
  {
    id: 6,
    name: "1등급 우유 900ml (유통기한 임박)",
    storeName: "한강유통",
    originalPrice: 2980,
    salePrice: 1200,
    discountRate: 60,
    image:
      "data:image/jpeg;base64,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",
    distance: "550m",
    stock: 8,
    deadline: "21:00",
  },
  {
    id: 7,
    name: "꿀부사 사과 4입 (봉지)",
    storeName: "서강프레시",
    originalPrice: 12000,
    salePrice: 5900,
    discountRate: 51,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600",
    distance: "180m",
    stock: 3,
    deadline: "18:45",
  },
  {
    id: 8,
    name: "우유 식빵 (연희베이커리 당일)",
    storeName: "우리동네 빵집",
    originalPrice: 4500,
    salePrice: 2000,
    discountRate: 55,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
    distance: "300m",
    stock: 2,
    deadline: "19:00",
  },
  {
    id: 9,
    name: "냉동 볶음밥 3종 골라담기",
    storeName: "편의점 플러스",
    originalPrice: 9900,
    salePrice: 4500,
    discountRate: 54,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    distance: "450m",
    stock: 12,
    deadline: "23:00",
  },
  {
    id: 10,
    name: "손질 고등어 2마리 (국내산)",
    storeName: "동교수산",
    originalPrice: 8500,
    salePrice: 3800,
    discountRate: 55,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600",
    distance: "620m",
    stock: 3,
    deadline: "18:30",
  },
];

export default HomePage;
