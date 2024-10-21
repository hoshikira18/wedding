import React from 'react';

const Couple = () => {
    return (
        <div className="mx-auto max-w-screen-xl space-y-10 px-40 py-40">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div
                    style={{
                        background: `url('https://weddingba.iwedding.info/templates/template15/images/sec-title-flower.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                    className="h-20 w-40"
                />
                <p className="font-great_vibes text-5xl font-semibold tracking-widest text-black/70">
                    Cô dâu & Chú rể
                </p>
                <p className="text-center font-comfortaa text-lg">
                    Tình yêu là điều kiện trong đó hạnh phúc của người khác là
                    điều cần thiết cho chính bạn.
                </p>
            </div>
            <div className="grid grid-cols-2 bg-[#f9f9f9]">
                <div>
                    <img
                        src="/images/127A0333.jpg"
                        alt="chu-re-image"
                        className="aspect-square w-full object-cover object-top"
                    />
                </div>
                <div className="flex flex-col items-start justify-center space-y-4 p-20">
                    <p className="font-great_vibes text-4xl font-medium">
                        Hà Hải
                    </p>
                    <p className="font-comfortaa tracking-wide">
                        Là bác sĩ nha khoa hiện đang công tác tại một phòng khám
                        nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người
                        hiền lành và ít nói. Luôn coi trọng tình cảm và yêu
                        thương gia đình. Với anh: “Gia đình là điểm tựa vững
                        chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối
                        với mỗi con người. Đó luôn là nơi tràn ngập tình yêu
                        thương để ta trở về.”
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center space-y-4 p-20">
                    <p className="font-great_vibes text-4xl font-medium">
                        Phượng Phượng
                    </p>
                    <p className="font-comfortaa tracking-wide">
                        Là bác sĩ nha khoa hiện đang công tác tại một phòng khám
                        nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người
                        hiền lành và ít nói. Luôn coi trọng tình cảm và yêu
                        thương gia đình. Với anh: “Gia đình là điểm tựa vững
                        chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối
                        với mỗi con người. Đó luôn là nơi tràn ngập tình yêu
                        thương để ta trở về.”
                    </p>
                </div>
                <div>
                    <img
                        src="/images/127A0422.jpg"
                        alt="chu-re-image"
                        className="aspect-square w-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    );
};

export default Couple;
