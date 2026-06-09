const Marquee = () => {
    return (
        <div className="flex items-center gap-4 bg-base-200 p-3 rounded-lg overflow-hidden mt-10">
            <button className="btn btn-error btn-sm text-white shrink-0">
                Latest
            </button>

            <div className="overflow-hidden whitespace-nowrap">
                <p className="animate-marquee font-medium">
                    Match Highlights: Germany vs Spain — as it happened &nbsp;!&nbsp;
                    Match Highlights: Germany vs Spain — as it happened &nbsp;!&nbsp;
                    Match Highlights: Germany vs Spain — as it happened
                </p>
            </div>
        </div>
    );
};

export default Marquee;