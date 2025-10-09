const metrics = {
    signatures: 0,
    templates: 4,
    published: 0,
  };


const MetricsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="text-sm text-slate-500">Signatures</div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold">{metrics.signatures}</div>
            <div className="text-xs text-slate-500 mt-1">created total</div>
          </div>
          <div className="text-sm text-green-600 font-medium">+0% </div>
        </div>
      </div>

      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="text-sm text-slate-500">Templates</div>
        <div className="mt-2">
          <div className="text-2xl font-bold">{metrics.templates}</div>
          <div className="text-xs text-slate-500 mt-1">available</div>
        </div>
      </div>

      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="text-sm text-slate-500">Published</div>
        <div className="mt-2">
          <div className="text-2xl font-bold">{metrics.published}</div>
          <div className="text-xs text-slate-500 mt-1">published total</div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
