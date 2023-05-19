import styles from "./styles.module.css";

import { Rating } from "react-simple-star-rating";
import { useState } from "react";

export const RatingStars = ({ setExternalRating }) => {
  const [rating, setRating] = useState(0);

  // pegar o valor da avaliação
  const handleRating = (newRating) => {
    setRating(newRating);
    setExternalRating(newRating);
  };

  const handleReset = () => {
    // volta para o valor inicial
    setRating(0);
    setExternalRating(0);
  };

  return (
    <div className={styles["rating-stars-container"]}>
      <Rating
        initialValue={rating}
        style={{ display: "flex", flexDirection: "column" }}
        size={60}
        SVGclassName="star-rate-icon"
        onClick={handleRating}
        allowFraction={true}
        showTooltip={true}
        tooltipDefaultText="Sua avaliação"
        tooltipArray={[
          "Horrível",
          "Muito ruim",
          "Ruim",
          "Não gostei",
          "Médio",
          "Podia ser melhor",
          "Bom",
          "Ótimo",
          "Incrível",
          "Perfeito",
        ]}
      />
      {rating > 0 && (
        <div className={styles["reset-button-container"]}>
          <button onClick={handleReset}>Cancelar</button>
        </div>
      )}
    </div>
  );
};
