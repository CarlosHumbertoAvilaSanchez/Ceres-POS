import { DeleteIcon } from "@icons/DeleteIcon";
export default function Modal({
  children,
  modalRef,
  title,
}: {
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDialogElement>;
  title: string;
}) {
  function closeModal() {
    modalRef.current?.close();
    document.body.style.overflow = "auto";
  }
  return (
    <dialog
      className="backdrop:bg-black/85 overflow-visible p-8 rounded-lg"
      ref={modalRef}
    >
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <hr className="border-1 border-black/60" />
        </header>
        <button onClick={closeModal} className="absolute top-0 right-0">
          <DeleteIcon />
        </button>
        {children}
      </div>
    </dialog>
  );
}
