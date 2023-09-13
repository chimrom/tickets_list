export const CurrencyGroup = ({ currency }) => {
	return (
		<div className="inline-flex rounded-md  mb-6 p-4" role="group">
			{currency.map((item) => {
				return (
					<button
						type="button"
						key={item}
						className="px-4 py-2 text-sm font-medium text-blue-500 bg-white border  rounded-md hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 focus:z-10 focus:ring-1 focus:bg-blue-500 focus:text-white "
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
