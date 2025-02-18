interface InputTitleProps {
  title: string;
  setTitle: (title: string) => void;
  touched: { title: boolean, hours: boolean, minutes: boolean, seconds: boolean };
  setTouched: (touched: { title: boolean, hours: boolean, minutes: boolean, seconds: boolean }) => void;
  isTitleValid: boolean;
}

export const InputTitle = ({ title, setTitle, touched, setTouched, isTitleValid }: InputTitleProps) => {
  return (
    <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setTouched({ ...touched, title: true, hours: false, minutes: false, seconds: false })}
              maxLength={50}
              className={` ${
                touched.title && !isTitleValid
                  ? 'border-red-500'
                  : 'border-gray-300'
              } w-full h-10 p-2 border border-gray-300 rounded-md`}
              placeholder="Enter timer title"
            />
            {touched.title && !isTitleValid && (
              <p className="mt-1 text-sm text-red-500">
                Title is required and must be less than 50 characters
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {title.length}/50 characters
            </p>
    </div>     
    )
};

