let colors = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue",
  "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone"
];

let shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default function ColorPalette() {
  return (
    <div className="p-4 overflow-x-auto">
  <div className="flex flex-col gap-4">
    <div className="flex gap-4">
      <div className="w-24 font-bold">Shade</div>
      {colors.map((color) => (
        <div key={color} className="w-12 text-center font-semibold capitalize">
          {color}
        </div>
      ))}
    </div>
    {shades.map((shade) => (
      <div key={shade} className="flex items-center gap-4">
        <div className="w-24 font-semibold text-left">{shade}</div>
        {colors.map((color) => (
          <div
            key={color}
            className={`w-12 h-12 rounded bg-${color}-${shade}`}
            title={`${color}-${shade}`}
          ></div>
        ))}
      </div>
    ))}
  </div>
</div>
    // <div className="flex flex-col  gap-4">
    //   <div className="flex  gap-4">
    //     <div className="w-24 font-bold">Color</div>
    //     <div className="w-12 text-center font-semibold">50</div>
    //     <div className="w-12 text-center font-semibold">100</div>
    //     <div className="w-12 text-center font-semibold">200</div>
    //     <div className="w-12 text-center font-semibold">300</div>
    //     <div className="w-12 text-center font-semibold">400</div>
    //     <div className="w-12 text-center font-semibold">500</div>
    //     <div className="w-12 text-center font-semibold">600</div>
    //     <div className="w-12 text-center font-semibold">700</div>
    //     <div className="w-12 text-center font-semibold">800</div>
    //     <div className="w-12 text-center font-semibold">900</div>
    //     <div className="w-12 text-center font-semibold">950</div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">red</div>
    //     <div className="w-12 h-12 rounded bg-red-50" title="red-50"></div>
    //     <div className="w-12 h-12 rounded bg-red-100" title="red-100"></div>
    //     <div className="w-12 h-12 rounded bg-red-200" title="red-200"></div>
    //     <div className="w-12 h-12 rounded bg-red-300" title="red-300"></div>
    //     <div className="w-12 h-12 rounded bg-red-400" title="red-400"></div>
    //     <div className="w-12 h-12 rounded bg-red-500" title="red-500"></div>
    //     <div className="w-12 h-12 rounded bg-red-600" title="red-600"></div>
    //     <div className="w-12 h-12 rounded bg-red-700" title="red-700"></div>
    //     <div className="w-12 h-12 rounded bg-red-800" title="red-800"></div>
    //     <div className="w-12 h-12 rounded bg-red-900" title="red-900"></div>
    //     <div className="w-12 h-12 rounded bg-red-950" title="red-950"></div>
    //   </div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">orange</div>
    //     <div className="w-12 h-12 rounded bg-orange-50" title="orange-50"></div>
    //     <div className="w-12 h-12 rounded bg-orange-100" title="orange-100"></div>
    //     <div className="w-12 h-12 rounded bg-orange-200" title="orange-200"></div>
    //     <div className="w-12 h-12 rounded bg-orange-300" title="orange-300"></div>
    //     <div className="w-12 h-12 rounded bg-orange-400" title="orange-400"></div>
    //     <div className="w-12 h-12 rounded bg-orange-500" title="orange-500"></div>
    //     <div className="w-12 h-12 rounded bg-orange-600" title="orange-600"></div>
    //     <div className="w-12 h-12 rounded bg-orange-700" title="orange-700"></div>
    //     <div className="w-12 h-12 rounded bg-orange-800" title="orange-800"></div>
    //     <div className="w-12 h-12 rounded bg-orange-900" title="orange-900"></div>
    //     <div className="w-12 h-12 rounded bg-orange-950" title="orange-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">amber</div>
    //     <div className="w-12 h-12 rounded bg-amber-50" title="amber-50"></div>
    //     <div className="w-12 h-12 rounded bg-amber-100" title="amber-100"></div>
    //     <div className="w-12 h-12 rounded bg-amber-200" title="amber-200"></div>
    //     <div className="w-12 h-12 rounded bg-amber-300" title="amber-300"></div>
    //     <div className="w-12 h-12 rounded bg-amber-400" title="amber-400"></div>
    //     <div className="w-12 h-12 rounded bg-amber-500" title="amber-500"></div>
    //     <div className="w-12 h-12 rounded bg-amber-600" title="amber-600"></div>
    //     <div className="w-12 h-12 rounded bg-amber-700" title="amber-700"></div>
    //     <div className="w-12 h-12 rounded bg-amber-800" title="amber-800"></div>
    //     <div className="w-12 h-12 rounded bg-amber-900" title="amber-900"></div>
    //     <div className="w-12 h-12 rounded bg-amber-950" title="amber-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">yellow</div>
    //     <div className="w-12 h-12 rounded bg-yellow-50" title="yellow-50"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-100" title="yellow-100"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-200" title="yellow-200"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-300" title="yellow-300"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-400" title="yellow-400"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-500" title="yellow-500"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-600" title="yellow-600"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-700" title="yellow-700"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-800" title="yellow-800"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-900" title="yellow-900"></div>
    //     <div className="w-12 h-12 rounded bg-yellow-950" title="yellow-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">lime</div>
    //     <div className="w-12 h-12 rounded bg-lime-50" title="lime-50"></div>
    //     <div className="w-12 h-12 rounded bg-lime-100" title="lime-100"></div>
    //     <div className="w-12 h-12 rounded bg-lime-200" title="lime-200"></div>
    //     <div className="w-12 h-12 rounded bg-lime-300" title="lime-300"></div>
    //     <div className="w-12 h-12 rounded bg-lime-400" title="lime-400"></div>
    //     <div className="w-12 h-12 rounded bg-lime-500" title="lime-500"></div>
    //     <div className="w-12 h-12 rounded bg-lime-600" title="lime-600"></div>
    //     <div className="w-12 h-12 rounded bg-lime-700" title="lime-700"></div>
    //     <div className="w-12 h-12 rounded bg-lime-800" title="lime-800"></div>
    //     <div className="w-12 h-12 rounded bg-lime-900" title="lime-900"></div>
    //     <div className="w-12 h-12 rounded bg-lime-950" title="lime-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">green</div>
    //     <div className="w-12 h-12 rounded bg-green-50" title="green-50"></div>
    //     <div className="w-12 h-12 rounded bg-green-100" title="green-100"></div>
    //     <div className="w-12 h-12 rounded bg-green-200" title="green-200"></div>
    //     <div className="w-12 h-12 rounded bg-green-300" title="green-300"></div>
    //     <div className="w-12 h-12 rounded bg-green-400" title="green-400"></div>
    //     <div className="w-12 h-12 rounded bg-green-500" title="green-500"></div>
    //     <div className="w-12 h-12 rounded bg-green-600" title="green-600"></div>
    //     <div className="w-12 h-12 rounded bg-green-700" title="green-700"></div>
    //     <div className="w-12 h-12 rounded bg-green-800" title="green-800"></div>
    //     <div className="w-12 h-12 rounded bg-green-900" title="green-900"></div>
    //     <div className="w-12 h-12 rounded bg-green-950" title="green-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">emerald</div>
    //     <div className="w-12 h-12 rounded bg-emerald-50" title="emerald-50"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-100" title="emerald-100"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-200" title="emerald-200"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-300" title="emerald-300"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-400" title="emerald-400"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-500" title="emerald-500"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-600" title="emerald-600"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-700" title="emerald-700"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-800" title="emerald-800"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-900" title="emerald-900"></div>
    //     <div className="w-12 h-12 rounded bg-emerald-950" title="emerald-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">teal</div>
    //     <div className="w-12 h-12 rounded bg-teal-50" title="teal-50"></div>
    //     <div className="w-12 h-12 rounded bg-teal-100" title="teal-100"></div>
    //     <div className="w-12 h-12 rounded bg-teal-200" title="teal-200"></div>
    //     <div className="w-12 h-12 rounded bg-teal-300" title="teal-300"></div>
    //     <div className="w-12 h-12 rounded bg-teal-400" title="teal-400"></div>
    //     <div className="w-12 h-12 rounded bg-teal-500" title="teal-500"></div>
    //     <div className="w-12 h-12 rounded bg-teal-600" title="teal-600"></div>
    //     <div className="w-12 h-12 rounded bg-teal-700" title="teal-700"></div>
    //     <div className="w-12 h-12 rounded bg-teal-800" title="teal-800"></div>
    //     <div className="w-12 h-12 rounded bg-teal-900" title="teal-900"></div>
    //     <div className="w-12 h-12 rounded bg-teal-950" title="teal-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">cyan</div>
    //     <div className="w-12 h-12 rounded bg-cyan-50" title="cyan-50"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-100" title="cyan-100"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-200" title="cyan-200"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-300" title="cyan-300"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-400" title="cyan-400"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-500" title="cyan-500"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-600" title="cyan-600"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-700" title="cyan-700"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-800" title="cyan-800"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-900" title="cyan-900"></div>
    //     <div className="w-12 h-12 rounded bg-cyan-950" title="cyan-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">sky</div>
    //     <div className="w-12 h-12 rounded bg-sky-50" title="sky-50"></div>
    //     <div className="w-12 h-12 rounded bg-sky-100" title="sky-100"></div>
    //     <div className="w-12 h-12 rounded bg-sky-200" title="sky-200"></div>
    //     <div className="w-12 h-12 rounded bg-sky-300" title="sky-300"></div>
    //     <div className="w-12 h-12 rounded bg-sky-400" title="sky-400"></div>
    //     <div className="w-12 h-12 rounded bg-sky-500" title="sky-500"></div>
    //     <div className="w-12 h-12 rounded bg-sky-600" title="sky-600"></div>
    //     <div className="w-12 h-12 rounded bg-sky-700" title="sky-700"></div>
    //     <div className="w-12 h-12 rounded bg-sky-800" title="sky-800"></div>
    //     <div className="w-12 h-12 rounded bg-sky-900" title="sky-900"></div>
    //     <div className="w-12 h-12 rounded bg-sky-950" title="sky-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">blue</div>
    //     <div className="w-12 h-12 rounded bg-blue-50" title="blue-50"></div>
    //     <div className="w-12 h-12 rounded bg-blue-100" title="blue-100"></div>
    //     <div className="w-12 h-12 rounded bg-blue-200" title="blue-200"></div>
    //     <div className="w-12 h-12 rounded bg-blue-300" title="blue-300"></div>
    //     <div className="w-12 h-12 rounded bg-blue-400" title="blue-400"></div>
    //     <div className="w-12 h-12 rounded bg-blue-500" title="blue-500"></div>
    //     <div className="w-12 h-12 rounded bg-blue-600" title="blue-600"></div>
    //     <div className="w-12 h-12 rounded bg-blue-700" title="blue-700"></div>
    //     <div className="w-12 h-12 rounded bg-blue-800" title="blue-800"></div>
    //     <div className="w-12 h-12 rounded bg-blue-900" title="blue-900"></div>
    //     <div className="w-12 h-12 rounded bg-blue-950" title="blue-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">indigo</div>
    //     <div className="w-12 h-12 rounded bg-indigo-50" title="indigo-50"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-100" title="indigo-100"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-200" title="indigo-200"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-300" title="indigo-300"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-400" title="indigo-400"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-500" title="indigo-500"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-600" title="indigo-600"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-700" title="indigo-700"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-800" title="indigo-800"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-900" title="indigo-900"></div>
    //     <div className="w-12 h-12 rounded bg-indigo-950" title="indigo-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">violet</div>
    //     <div className="w-12 h-12 rounded bg-violet-50" title="violet-50"></div>
    //     <div className="w-12 h-12 rounded bg-violet-100" title="violet-100"></div>
    //     <div className="w-12 h-12 rounded bg-violet-200" title="violet-200"></div>
    //     <div className="w-12 h-12 rounded bg-violet-300" title="violet-300"></div>
    //     <div className="w-12 h-12 rounded bg-violet-400" title="violet-400"></div>
    //     <div className="w-12 h-12 rounded bg-violet-500" title="violet-500"></div>
    //     <div className="w-12 h-12 rounded bg-violet-600" title="violet-600"></div>
    //     <div className="w-12 h-12 rounded bg-violet-700" title="violet-700"></div>
    //     <div className="w-12 h-12 rounded bg-violet-800" title="violet-800"></div>
    //     <div className="w-12 h-12 rounded bg-violet-900" title="violet-900"></div>
    //     <div className="w-12 h-12 rounded bg-violet-950" title="violet-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">purple</div>
    //     <div className="w-12 h-12 rounded bg-purple-50" title="purple-50"></div>
    //     <div className="w-12 h-12 rounded bg-purple-100" title="purple-100"></div>
    //     <div className="w-12 h-12 rounded bg-purple-200" title="purple-200"></div>
    //     <div className="w-12 h-12 rounded bg-purple-300" title="purple-300"></div>
    //     <div className="w-12 h-12 rounded bg-purple-400" title="purple-400"></div>
    //     <div className="w-12 h-12 rounded bg-purple-500" title="purple-500"></div>
    //     <div className="w-12 h-12 rounded bg-purple-600" title="purple-600"></div>
    //     <div className="w-12 h-12 rounded bg-purple-700" title="purple-700"></div>
    //     <div className="w-12 h-12 rounded bg-purple-800" title="purple-800"></div>
    //     <div className="w-12 h-12 rounded bg-purple-900" title="purple-900"></div>
    //     <div className="w-12 h-12 rounded bg-purple-950" title="purple-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">fuchsia</div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-50" title="fuchsia-50"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-100" title="fuchsia-100"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-200" title="fuchsia-200"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-300" title="fuchsia-300"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-400" title="fuchsia-400"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-500" title="fuchsia-500"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-600" title="fuchsia-600"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-700" title="fuchsia-700"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-800" title="fuchsia-800"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-900" title="fuchsia-900"></div>
    //     <div className="w-12 h-12 rounded bg-fuchsia-950" title="fuchsia-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">pink</div>
    //     <div className="w-12 h-12 rounded bg-pink-50" title="pink-50"></div>
    //     <div className="w-12 h-12 rounded bg-pink-100" title="pink-100"></div>
    //     <div className="w-12 h-12 rounded bg-pink-200" title="pink-200"></div>
    //     <div className="w-12 h-12 rounded bg-pink-300" title="pink-300"></div>
    //     <div className="w-12 h-12 rounded bg-pink-400" title="pink-400"></div>
    //     <div className="w-12 h-12 rounded bg-pink-500" title="pink-500"></div>
    //     <div className="w-12 h-12 rounded bg-pink-600" title="pink-600"></div>
    //     <div className="w-12 h-12 rounded bg-pink-700" title="pink-700"></div>
    //     <div className="w-12 h-12 rounded bg-pink-800" title="pink-800"></div>
    //     <div className="w-12 h-12 rounded bg-pink-900" title="pink-900"></div>
    //     <div className="w-12 h-12 rounded bg-pink-950" title="pink-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">rose</div>
    //     <div className="w-12 h-12 rounded bg-rose-50" title="rose-50"></div>
    //     <div className="w-12 h-12 rounded bg-rose-100" title="rose-100"></div>
    //     <div className="w-12 h-12 rounded bg-rose-200" title="rose-200"></div>
    //     <div className="w-12 h-12 rounded bg-rose-300" title="rose-300"></div>
    //     <div className="w-12 h-12 rounded bg-rose-400" title="rose-400"></div>
    //     <div className="w-12 h-12 rounded bg-rose-500" title="rose-500"></div>
    //     <div className="w-12 h-12 rounded bg-rose-600" title="rose-600"></div>
    //     <div className="w-12 h-12 rounded bg-rose-700" title="rose-700"></div>
    //     <div className="w-12 h-12 rounded bg-rose-800" title="rose-800"></div>
    //     <div className="w-12 h-12 rounded bg-rose-900" title="rose-900"></div>
    //     <div className="w-12 h-12 rounded bg-rose-950" title="rose-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">slate</div>
    //     <div className="w-12 h-12 rounded bg-slate-50" title="slate-50"></div>
    //     <div className="w-12 h-12 rounded bg-slate-100" title="slate-100"></div>
    //     <div className="w-12 h-12 rounded bg-slate-200" title="slate-200"></div>
    //     <div className="w-12 h-12 rounded bg-slate-300" title="slate-300"></div>
    //     <div className="w-12 h-12 rounded bg-slate-400" title="slate-400"></div>
    //     <div className="w-12 h-12 rounded bg-slate-500" title="slate-500"></div>
    //     <div className="w-12 h-12 rounded bg-slate-600" title="slate-600"></div>
    //     <div className="w-12 h-12 rounded bg-slate-700" title="slate-700"></div>
    //     <div className="w-12 h-12 rounded bg-slate-800" title="slate-800"></div>
    //     <div className="w-12 h-12 rounded bg-slate-900" title="slate-900"></div>
    //     <div className="w-12 h-12 rounded bg-slate-950" title="slate-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">gray</div>
    //     <div className="w-12 h-12 rounded bg-gray-50" title="gray-50"></div>
    //     <div className="w-12 h-12 rounded bg-gray-100" title="gray-100"></div>
    //     <div className="w-12 h-12 rounded bg-gray-200" title="gray-200"></div>
    //     <div className="w-12 h-12 rounded bg-gray-300" title="gray-300"></div>
    //     <div className="w-12 h-12 rounded bg-gray-400" title="gray-400"></div>
    //     <div className="w-12 h-12 rounded bg-gray-500" title="gray-500"></div>
    //     <div className="w-12 h-12 rounded bg-gray-600" title="gray-600"></div>
    //     <div className="w-12 h-12 rounded bg-gray-700" title="gray-700"></div>
    //     <div className="w-12 h-12 rounded bg-gray-800" title="gray-800"></div>
    //     <div className="w-12 h-12 rounded bg-gray-900" title="gray-900"></div>
    //     <div className="w-12 h-12 rounded bg-gray-950" title="gray-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">zinc</div>
    //     <div className="w-12 h-12 rounded bg-zinc-50" title="zinc-50"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-100" title="zinc-100"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-200" title="zinc-200"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-300" title="zinc-300"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-400" title="zinc-400"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-500" title="zinc-500"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-600" title="zinc-600"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-700" title="zinc-700"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-800" title="zinc-800"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-900" title="zinc-900"></div>
    //     <div className="w-12 h-12 rounded bg-zinc-950" title="zinc-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">neutral</div>
    //     <div className="w-12 h-12 rounded bg-neutral-50" title="neutral-50"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-100" title="neutral-100"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-200" title="neutral-200"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-300" title="neutral-300"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-400" title="neutral-400"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-500" title="neutral-500"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-600" title="neutral-600"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-700" title="neutral-700"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-800" title="neutral-800"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-900" title="neutral-900"></div>
    //     <div className="w-12 h-12 rounded bg-neutral-950" title="neutral-950"></div>
		// 	</div>
		// 	<div className="flex items-center  gap-4">
    //     <div className="w-24 capitalize font-semibold text-left">stone</div>
    //     <div className="w-12 h-12 rounded bg-stone-50" title="stone-50"></div>
    //     <div className="w-12 h-12 rounded bg-stone-100" title="stone-100"></div>
    //     <div className="w-12 h-12 rounded bg-stone-200" title="stone-200"></div>
    //     <div className="w-12 h-12 rounded bg-stone-300" title="stone-300"></div>
    //     <div className="w-12 h-12 rounded bg-stone-400" title="stone-400"></div>
    //     <div className="w-12 h-12 rounded bg-stone-500" title="stone-500"></div>
    //     <div className="w-12 h-12 rounded bg-stone-600" title="stone-600"></div>
    //     <div className="w-12 h-12 rounded bg-stone-700" title="stone-700"></div>
    //     <div className="w-12 h-12 rounded bg-stone-800" title="stone-800"></div>
    //     <div className="w-12 h-12 rounded bg-stone-900" title="stone-900"></div>
    //     <div className="w-12 h-12 rounded bg-stone-950" title="stone-950"></div>
		// 	</div>
    // </div>
  );
};
