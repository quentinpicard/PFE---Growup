import { Button, ButtonVariant, ButtonFill } from "./components/Button";
import { VegetableCard } from "./components/VegetableCard";

const variants: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];

const fills: ButtonFill[] = ["contained", "outline"];

const variantLabels: Record<ButtonVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
  tertiary: "Tertiary",
  success: "Success",
  warning: "Warning",
  error: "Error",
};

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 8-8 8"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main
      className="min-h-screen p-12"
      style={{ background: "var(--primitive-secondary-050)" }}
    >
      {/* Header */}
      <div className="mb-14">
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--color-primary-main)",
          }}
        >
          Design System — Button
        </h1>
        <p
          className="text-base"
          style={{
            fontFamily: "var(--font-text)",
            color: "var(--color-text-dark)",
            opacity: 0.6,
          }}
        >
          Composant{" "}
          <code
            className="px-1.5 py-0.5 rounded text-sm"
            style={{ background: "var(--primitive-secondary-100)" }}
          >
            &lt;Button&gt;
          </code>{" "}
          — 6 types · 2 fills · states
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {fills.map((fill) => (
          <section key={fill}>
            <h2
              className="text-xs font-semibold uppercase tracking-widest mb-8"
              style={{
                fontFamily: "var(--font-text)",
                color: "var(--color-gray-main)",
              }}
            >
              Fill — {fill}
            </h2>

            <div className="flex flex-col gap-5">
              {/* Column headers */}
              <div
                className="grid gap-6 text-xs font-medium uppercase tracking-wider"
                style={{
                  gridTemplateColumns: "130px repeat(3, auto) 1fr",
                  color: "var(--color-gray-main)",
                  fontFamily: "var(--font-text)",
                }}
              >
                <span />
                <span>Enabled</span>
                <span>Disabled</span>
                <span>With icon</span>
              </div>

              {variants.map((variant) => (
                <div
                  key={variant}
                  className="grid items-center gap-6"
                  style={{ gridTemplateColumns: "130px repeat(3, auto) 1fr" }}
                >
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-text)",
                      color: "var(--color-text-dark)",
                      opacity: 0.7,
                    }}
                  >
                    {variantLabels[variant]}
                  </span>

                  <Button variant={variant} fill={fill}>
                    {variantLabels[variant]}
                  </Button>

                  <Button variant={variant} fill={fill} disabled>
                    {variantLabels[variant]}
                  </Button>

                  <Button variant={variant} fill={fill} icon={<LeafIcon />}>
                    {variantLabels[variant]}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Token reference */}
      <section className="mt-20">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{
            fontFamily: "var(--font-text)",
            color: "var(--color-gray-main)",
          }}
        >
          Tokens utilisés
        </h2>
        <div
          className="p-6 text-sm font-mono leading-relaxed"
          style={{
            background: "var(--color-dark)",
            color: "var(--primitive-primary-300)",
            borderRadius: "var(--radius-card-m)",
          }}
        >
          <p style={{ color: "var(--primitive-gray-500)" }}>{"/* Border-radius */"}</p>
          <p>
            <span style={{ color: "var(--primitive-tertiary-400)" }}>--radius-btn</span>
            <span style={{ color: "var(--primitive-gray-500)" }}>: </span>
            <span style={{ color: "var(--primitive-secondary-300)" }}>128px (pill)</span>
          </p>
          <br />
          <p style={{ color: "var(--primitive-gray-500)" }}>{"/* Police */"}</p>
          <p>
            <span style={{ color: "var(--primitive-tertiary-400)" }}>--font-btn</span>
            <span style={{ color: "var(--primitive-gray-500)" }}>: </span>
            <span style={{ color: "var(--primitive-secondary-300)" }}>Gabarito</span>
          </p>
          <br />
          <p style={{ color: "var(--primitive-gray-500)" }}>{"/* Couleurs */"}</p>
          {(["primary", "secondary", "tertiary", "success", "warning", "error"] as ButtonVariant[]).map((v) => (
            <p key={v}>
              <span style={{ color: "var(--primitive-tertiary-400)" }}>
                --color-{v}-main
              </span>
              <span style={{ color: "var(--primitive-gray-500)" }}> → </span>
              <span style={{ color: "var(--primitive-success-300)" }}>
                var(--primitive-{v}-
                {v === "tertiary" ? "700" : v === "success" || v === "warning" || v === "error" ? "400" : "800"})
              </span>
            </p>
          ))}
        </div>
      </section>

      {/* ── Vegetable Card ── */}
      <section className="mt-20">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ fontFamily: "var(--font-text)", color: "var(--color-gray-main)" }}
        >
          Vegetable Card — Vertical
        </h2>

        <div className="flex flex-wrap gap-6">
          {/* Default */}
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs" style={{ fontFamily: "var(--font-text)", color: "var(--color-gray-main)" }}>
              Default
            </span>
            <VegetableCard
              title="Tomate cerise"
              zone="Zone A"
              image="https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&q=80"
              showTag
              tagLabel="Semis"
            />
          </div>

          {/* Avec tags récolte + état */}
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs" style={{ fontFamily: "var(--font-text)", color: "var(--color-gray-main)" }}>
              Avec récolte + état
            </span>
            <VegetableCard
              title="Courgette"
              zone="Zone B"
              image="https://images.unsplash.com/photo-1562347572-2f353eb72f86?w=400&q=80"
              showTag
              tagLabel="Semis"
              showRecolte
              recolteLabel="Récolte"
              showState
              stateLabel="En cours"
            />
          </div>

          {/* Sans tag image */}
          <div className="flex flex-col gap-2 items-start">
            <span className="text-xs" style={{ fontFamily: "var(--font-text)", color: "var(--color-gray-main)" }}>
              Sans badge
            </span>
            <VegetableCard
              title="Carotte"
              zone="Zone C"
              image="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80"
              showTag={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
