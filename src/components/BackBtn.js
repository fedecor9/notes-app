export const BackBtn = ({ handleMenu }) => {
  return (
    <div className="text-center d-grid gap-2">
      <button type="button" className="btn-grad" onClick={() => handleMenu()}>
        Back
      </button>
    </div>
  );
};
