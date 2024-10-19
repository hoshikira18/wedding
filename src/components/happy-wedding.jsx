import React from 'react';

const wishes = [
    {
        wish: '',
    },
];

const HappyWedding = () => {
    return (
        <div className="space-y-5 bg-gray-400/10 px-60 py-20 text-center">
            <p className="font-great_vibes text-5xl font-semibold tracking-widest text-black/70">
                Happy Wedding
            </p>
            <p className="text-center font-comfortaa text-lg">
                Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất
                đến đám cưới của chúng tôi!
            </p>
            <div className="mx-auto grid max-w-screen-sm grid-cols-12 gap-2 rounded-lg border border-dotted border-black/60 bg-white p-5">
                <input
                    type="text"
                    className="col-span-6 border p-2 outline-none"
                    required
                    placeholder="Họ và tên"
                />
                <select
                    name="role"
                    id="role"
                    className="col-span-6 border p-2 outline-none"
                >
                    <option value="Bạn cô dâu">Bạn cô dâu</option>
                    <option value="Bạn chú rể">Bạn chú rể</option>
                    <option value="Bạn dâu rể">Bạn dâu rể</option>
                </select>
                <textarea
                    name="wish"
                    id="wish"
                    className="col-span-12 border p-2 outline-none"
                    placeholder="Nhập lời chúc của bạn"
                ></textarea>
                <select
                    tabindex="4"
                    name="form_item5"
                    className="col-span-12 border p-2 outline-none"
                >
                    <option value="">Lời chúc gợi ý sẵn</option>
                    <option value="Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh phúc!">
                        Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh phúc!
                    </option>
                    <option value="Happy Wedding, chúc 2 vk ck trăm năm hạnh phúc, sớm sinh quý tử nhé.">
                        Happy Wedding, chúc 2 vk ck trăm năm hạnh phúc, sớm sinh
                        quý tử nhé.
                    </option>
                    <option value="Trăm năm hạnh phúc nhé 2 vợ chồng 😍😍">
                        Trăm năm hạnh phúc nhé 2 vợ chồng 😍😍
                    </option>
                    <option value="Chúc mừng hạnh phúc đôi bạn trẻ">
                        Chúc mừng hạnh phúc đôi bạn trẻ
                    </option>
                    <option value="HAPPY WEDDING">HAPPY WEDDING</option>
                    <option value="Chúc mừng hạnh phúc hai bạn. Chúc hai bạn bên nhau đầu bạc răng long, sớm có thiên thần nhỏ nhé!">
                        Chúc mừng hạnh phúc hai bạn. Chúc hai bạn bên nhau đầu
                        bạc răng long, sớm có thiên thần nhỏ nhé!
                    </option>
                    <option value="Một chương mới đã mở ra với hai bạn rồi. Tôi mong cuộc sống mới của cả hai sẽ tràn ngập hy vọng, hạnh phúc và niềm vui!">
                        Một chương mới đã mở ra với hai bạn rồi. Tôi mong cuộc
                        sống mới của cả hai sẽ tràn ngập hy vọng, hạnh phúc và
                        niềm vui!
                    </option>
                    <option value="Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc hai bạn một cuộc sống thật tuyệt vời, hòa thuận, gắn bó son sắt, thủy chung, hạnh phúc lâu dài.">
                        Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc
                        hai bạn một cuộc sống thật tuyệt vời, hòa thuận, gắn bó
                        son sắt, thủy chung, hạnh phúc lâu dài.
                    </option>
                </select>
                <button className="col-span-6 col-start-4 rounded-3xl bg-[#ff7c7c] px-3 py-2 font-medium text-white">
                    Gửi lời chúc cho cô dâu chú rể
                </button>
            </div>
        </div>
    );
};

export default HappyWedding;
