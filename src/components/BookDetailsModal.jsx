import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

function BookDetailsModal({ isOpen, setOpen, book }) {
  function open() {
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Book Details
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-80 max-w-md rounded-xl bg-white/80 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 flex flex-col items-center"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-slate-700 self-start"
              >
                Book Info:
              </DialogTitle>
              <div className="flex flex-col items-start w-full">
                <p className="mt-2 text-sm/6 text-black">Title: {book.title}</p>
                <p className="mt-2 text-sm/6 text-black">
                  Author: {book.author}
                </p>
                <p className="mt-2 text-sm/6 text-black">
                  Is reserved: {book.reserved ? "Reserved" : "Available"}
                </p>
              </div>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default BookDetailsModal;
