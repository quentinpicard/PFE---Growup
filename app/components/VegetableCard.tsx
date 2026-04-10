import Image from "next/image";

export interface VegetableCardProps {
  title: string;
  zone: string;
  image: string;
  tagLabel?: string;       // ex: "Semis" — affiché sur l'image
  showTag?: boolean;
  showRecolte?: boolean;   // affiche le tag récolte
  recolteLabel?: string;
  showState?: boolean;     // affiche le tag état
  stateLabel?: string;
}

function HarvestIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      {/* Cagette */}
      <rect x="4" y="18" width="24" height="5" rx="1" fill="#3B3025" />
      <rect x="4" y="24" width="24" height="4" rx="1" fill="#3B3025" />
      {/* Lattes */}
      <rect x="10" y="18" width="2" height="10" rx="1" fill="#4F4334" />
      <rect x="20" y="18" width="2" height="10" rx="1" fill="#4F4334" />
      {/* Plantes */}
      <path d="M12 18 C12 12 8 10 8 14 C8 16 10 18 12 18Z" fill="#427449" />
      <path d="M16 18 C16 10 12 8 13 14 C13.5 16 15 18 16 18Z" fill="#56915F" />
      <path d="M20 18 C20 12 24 10 24 14 C24 16 22 18 20 18Z" fill="#427449" />
    </svg>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="vcard-tag-chip">{label}</span>
  );
}

export function VegetableCard({
  title,
  zone,
  image,
  tagLabel = "Semis",
  showTag = true,
  showRecolte = false,
  recolteLabel = "Récolte",
  showState = false,
  stateLabel = "En cours",
}: VegetableCardProps) {
  return (
    <article className="vcard-v">
      {/* Zone image */}
      <div className="vcard-v__image-wrap">
        <Image
          src={image}
          alt={title}
          fill
          className="vcard-v__img"
          sizes="209px"
        />
        {showTag && (
          <div className="vcard-v__badge">
            <span className="vcard-v__dot" aria-hidden />
            <Tag label={tagLabel} />
          </div>
        )}
      </div>

      {/* Zone texte */}
      <div className="vcard-v__body">
        <div className="vcard-v__text">
          {(showRecolte || showState) && (
            <div className="vcard-v__tags-row">
              {showRecolte && <Tag label={recolteLabel} />}
              {showState  && <Tag label={stateLabel} />}
            </div>
          )}
          <h3 className="vcard-v__title">{title}</h3>
          <p  className="vcard-v__zone">{zone}</p>
        </div>

        <div className="vcard-v__icon" aria-hidden>
          <HarvestIcon />
        </div>
      </div>
    </article>
  );
}
