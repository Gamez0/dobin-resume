export default function Circuit() {
  return (
    <div className="mx-auto w-full max-w-[1200px]" aria-labelledby="container">
      <div
        className="relative mt-[-140px] flex flex-col items-center"
        aria-labelledby="circuit-wrap"
      >
        <div
          className="relative mb-[-176px] flex items-center justify-center overflow-hidden"
          aria-labelledby="circuit-top"
        >
          <img
            src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/62723a9e2f75a49275ec2c97_circuit-top.png"
            loading="lazy"
            height={477}
            width={859}
            alt=""
            aria-labelledby="circuit-top-img"
            className="relative z-[4] h-auto w-full max-w-[859px]"
          />
          <img
            src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines.png"
            loading="lazy"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 89vw, 859px"
            srcSet="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines-p-500.png 500w, https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines-p-800.png 800w, https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines-p-1080.png 1080w, https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines-p-1600.png 1600w, https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6231f2bb5204dfd7354a4b57_circuit-top-looping-lines.png 1718w"
            alt=""
            aria-labelledby="circuit-top-looping-lines"
            className="absolute inset-0 z-[3]"
          />
          <div
            aria-labelledby="circuit-top-highlight-lines-wrap"
            className="absolute left-[406px] top-[66px] z-[3] h-[260px] w-[270px] overflow-hidden"
          >
            <div
              style={{
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              aria-labelledby="circuit-top-highlight-line"
              className="size-full bg-gradient-to-b from-[rgba(35,240,195,0)] via-[rgba(35,240,195,0.23)] to-[#23f0c3]"
            ></div>
            {/* 여기까지 했음 */}
          </div>
          <div
            className="circuit-looping-highlight circuit-looping-highlight--top"
            style={{ display: "block" }}
          ></div>
          <div className="circuit-top-bg"></div>
          <div
            className="circuit-chip-highlight cc-top"
            style={{
              opacity: 0,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(7, 7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          ></div>
        </div>
        <div
          className="relative z-10 size-[220px] items-center justify-center p-px"
          aria-labelledby="chip-wrap"
        >
          <div
            data-w-id="1b1ee77a-c53b-8d78-e7c9-88161969ae35"
            className="chip-ix-reset-trigger"
            style={{ display: "block" }}
          ></div>
          <div
            data-w-id="3b4e5fad-f69d-c28c-0aa7-c14708a3a42e"
            className="chip-ix-in-trigger"
            style={{ display: "block" }}
          ></div>
          <div style={{ opacity: 1 }} className="chip-shadow"></div>
          <div style={{ opacity: 1 }} className="chip-border">
            <div
              className="chip-border-inner"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(365deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            ></div>
          </div>
          <div className="chip-face">
            <div className="chip-face-content">
              <div className="chip-logo-wrap">
                <img
                  src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622605f9d95f62a4e94c388e_chip-logo.png"
                  loading="lazy"
                  width="164"
                  height="153"
                  alt=""
                  style={{ opacity: 1 }}
                  className="chip-logo"
                />
              </div>
              <div style={{ opacity: 1 }} className="circuit-chip-text">
                WorkOS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
