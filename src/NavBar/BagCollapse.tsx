import './styles/BagCollapse.css'

export default function BagCollapse() {
    return(
        <div style={{minHeight: 120}}>
          <div className="collapse multi-collapse" id="collapseWidthExample">
            <div className="card card-body" style={{width: 300}}>
              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
            </div>
          </div>
        </div>
    )
}