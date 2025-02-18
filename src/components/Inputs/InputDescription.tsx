
interface InputDescriptionProps {
    description: string;
    setDescription: (description: string) => void;
}

const InputDescription = ({ description, setDescription }: InputDescriptionProps) => {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
        </label>
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className=" w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter timer description (optional)"
        />
    </div>
  )
}

export default InputDescription