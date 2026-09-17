import React from 'react';

const FoodCard = ({ food }) => {
    const {
        dish_name,
        image_link,
        rating,
        price,
        cuisine,
        category,
        alternative_names,
        approximate_nutrition_per_serving,
    } = food;

    return (
        <div
            className="group relative w-full h-full rounded-3xl transition-all duration-500 hover:-translate-y-2"
            style={{
                padding: '1px',
                background:
                    'linear-gradient(135deg, rgba(251,191,36,0.6) 0%, rgba(236,72,153,0.4) 50%, rgba(147,51,234,0.6) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
        >
            {/* ===== Glass Card Inner ===== */}
            <div
                className="relative h-full w-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
            >
                {/* Subtle top highlight */}
                <div
                    className="absolute top-0 left-0 right-0 h-[1px]"
                    style={{
                        background:
                            'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
                    }}
                />

                {/* ===== Image section ===== */}
                <div
                    className="relative w-full overflow-hidden shrink-0 flex items-center justify-center"
                    style={{
                        height: '224px',
                        background:
                            'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(15,15,15,0.9) 100%)',
                    }}
                >
                    <img
                        src={image_link}
                        alt={dish_name}
                        loading="lazy"
                        className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />

                    {/* Category badge - glass */}
                    <div className="absolute top-4 left-4">
                        <span
                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white"
                            style={{
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.25)',
                            }}
                        >
                            {category}
                        </span>
                    </div>

                    {/* Rating badge */}
                    <div
                        className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            boxShadow: '0 8px 20px -6px rgba(251,191,36,0.6)',
                        }}
                    >
                        <span className="text-sm" style={{ color: '#451a03' }}>★</span>
                        <span className="text-xs font-bold" style={{ color: '#451a03' }}>
                            {rating}
                        </span>
                    </div>

                    {/* Price overlay - glass */}
                    <div
                        className="absolute bottom-4 left-4 flex items-baseline gap-1 px-3 py-1 rounded-full"
                        style={{
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                        }}
                    >
                        <span
                            className="text-lg font-black text-white"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            ৳{price}
                        </span>
                        <span
                            className="text-[10px] font-medium"
                            style={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                            BDT
                        </span>
                    </div>
                </div>

                {/* ===== Body ===== */}
                <div className="flex flex-col flex-1 p-5 gap-3">

                    {/* Title */}
                    <h2 className="text-lg font-bold text-white leading-snug line-clamp-2">
                        {dish_name}
                    </h2>

                    {/* Cuisine */}
                    <p
                        className="text-xs line-clamp-2 italic"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                        {cuisine}
                    </p>

                    {/* Divider - glass line */}
                    <div
                        className="h-px w-full"
                        style={{
                            background:
                                'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)',
                        }}
                    />

                    {/* Nutrition pills - glass style */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                        {[
                            { icon: '🔥', label: 'Cal', value: approximate_nutrition_per_serving?.calories?.split(' ')[0] },
                            { icon: '💪', label: 'Pro', value: approximate_nutrition_per_serving?.protein },
                            { icon: '🍚', label: 'Carb', value: approximate_nutrition_per_serving?.carbohydrates },
                            { icon: '🥑', label: 'Fat', value: approximate_nutrition_per_serving?.fat },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between px-3 py-1.5 rounded-lg"
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                }}
                            >
                                <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                                    {item.icon} {item.label}
                                </span>
                                <span
                                    className="font-semibold truncate ml-1"
                                    style={{ color: 'rgba(255,255,255,0.95)' }}
                                >
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Alternative name */}
                    {alternative_names?.[0] && (
                        <p
                            className="text-[10px] truncate mt-1"
                            style={{ color: 'rgba(255,255,255,0.4)' }}
                        >
                            aka{' '}
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                                {alternative_names[0]}
                            </span>
                        </p>
                    )}

                    {/* Action button - glass gradient */}
                    <button
                        className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(252,211,77,0.95) 0%, rgba(251,191,36,0.95) 50%, rgba(244,114,182,0.95) 100%)',
                            color: '#0a0a0a',
                            boxShadow: '0 10px 25px -10px rgba(251,191,36,0.6)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                        }}
                    >
                        Order Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;