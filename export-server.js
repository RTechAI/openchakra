const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.json({ limit: '5mb' }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  next()
})

app.post('/export', (req, res) => {
  try {
    const code = req.body.code || ''

    const target = path.resolve(
      __dirname,
      '../ForgeUI-One/main/90_Studio_Export.c'
    )

    fs.writeFileSync(target, code, 'utf8')

    console.log('Exported to:', target)

    res.json({
      ok: true,
      target,
    })
  } catch (err) {
    console.error(err)

    res.status(500).json({
      ok: false,
      error: String(err),
    })
  }
})

app.listen(3030, () => {
  console.log('ForgeUI export server alive on :3030')
})