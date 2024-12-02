import request from "@/utils/request";
//获取 github 仓库最新版本号和版本号列表的 API
export function getGithubReleases() {
  return request({
    url: "https://api.github.com/repos/School-of-Website-Engineering/STARART/releases",
    method: "get",
  });
}
